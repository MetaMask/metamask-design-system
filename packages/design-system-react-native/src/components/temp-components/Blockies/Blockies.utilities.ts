/**
 * A handy class to calculate color values and generate PNG images.
 *
 * @version 1.0.0
 * @author Robert Eisele <robert@xarg.org>
 * @copyright Copyright (c) 2010, Robert Eisele
 * @see {@link http://www.xarg.org/2010/03/generate-client-side-png-files-using-javascript/}
 * @license BSD-3-Clause
 */

// Type definitions
type BlockiesOptions = {
  seed: string;
  size?: number;
  scale?: number;
  color?: [number, number, number];
  bgcolor?: [number, number, number];
  spotcolor?: [number, number, number];
};

type PaletteEntry = {
  [color: number]: string;
};

type RGBAColor = [number, number, number, number];
type HSLColor = [number, number, number];

/**
 * Writes string arguments to a buffer starting at the specified offset.
 *
 * @param buffer - The buffer to write to
 * @param offs - The offset to start writing at
 * @param args - The string arguments to write
 */
function write(buffer: string[], offs: number, ...args: string[]): void {
  for (const arg of args) {
    for (let j = 0; j < arg.length; j += 1) {
      // eslint-disable-next-line no-plusplus
      buffer[offs++] = arg.charAt(j);
    }
  }
}

/**
 * Converts a 16-bit number to a 2-byte string.
 *
 * @param w - The number to convert
 * @returns A 2-byte string representation
 */
function byte2(w: number): string {
  // eslint-disable-next-line no-bitwise
  return String.fromCharCode((w >> 8) & 255, w & 255);
}

/**
 * Converts a 32-bit number to a 4-byte string.
 *
 * @param w - The number to convert
 * @returns A 4-byte string representation
 */
function byte4(w: number): string {
  return String.fromCharCode(
    // eslint-disable-next-line no-bitwise
    (w >> 24) & 255,
    // eslint-disable-next-line no-bitwise
    (w >> 16) & 255,
    // eslint-disable-next-line no-bitwise
    (w >> 8) & 255,
    // eslint-disable-next-line no-bitwise
    w & 255,
  );
}

/**
 * Converts a 16-bit number to a 2-byte string in little-endian format.
 *
 * @param w - The number to convert
 * @returns A 2-byte string representation in little-endian format
 */
function byte2lsb(w: number): string {
  // eslint-disable-next-line no-bitwise
  return String.fromCharCode(w & 255, (w >> 8) & 255);
}

/**
 * PNG class for generating PNG images
 */
class PNG {
  public width: number;

  public height: number;

  public depth: number;

  public pix_size: number;

  public data_size: number;

  public ihdr_offs: number;

  public ihdr_size: number;

  public plte_offs: number;

  public plte_size: number;

  public trns_offs: number;

  public trns_size: number;

  public idat_offs: number;

  public idat_size: number;

  public iend_offs: number;

  public iend_size: number;

  public buffer_size: number;

  public buffer: string[];

  public palette: PaletteEntry;

  public pindex: number;

  private readonly _crc32: number[];

  constructor(width: number, height: number, depth: number) {
    this.width = width;
    this.height = height;
    this.depth = depth;

    // pixel data and row filter identifier size
    this.pix_size = height * (width + 1);

    // deflate header, pix_size, block headers, adler32 checksum
    this.data_size =
      2 + this.pix_size + 5 * Math.floor((0xfffe + this.pix_size) / 0xffff) + 4;

    // offsets and sizes of Png chunks
    this.ihdr_offs = 0; // IHDR offset and size
    this.ihdr_size = 4 + 4 + 13 + 4;
    this.plte_offs = this.ihdr_offs + this.ihdr_size; // PLTE offset and size
    this.plte_size = 4 + 4 + 3 * depth + 4;
    this.trns_offs = this.plte_offs + this.plte_size; // tRNS offset and size
    this.trns_size = 4 + 4 + depth + 4;
    this.idat_offs = this.trns_offs + this.trns_size; // IDAT offset and size
    this.idat_size = 4 + 4 + this.data_size + 4;
    this.iend_offs = this.idat_offs + this.idat_size; // IEND offset and size
    this.iend_size = 4 + 4 + 4;
    this.buffer_size = this.iend_offs + this.iend_size; // total PNG size

    this.buffer = new Array(this.buffer_size);
    this.palette = {};
    this.pindex = 0;
    this._crc32 = new Array(256);

    // initialize buffer with zero bytes
    for (let i = 0; i < this.buffer_size; i += 1) {
      this.buffer[i] = '\x00';
    }

    // initialize non-zero elements
    write(
      this.buffer,
      this.ihdr_offs,
      byte4(this.ihdr_size - 12),
      'IHDR',
      byte4(width),
      byte4(height),
      '\x08\x03',
    );
    write(this.buffer, this.plte_offs, byte4(this.plte_size - 12), 'PLTE');
    write(this.buffer, this.trns_offs, byte4(this.trns_size - 12), 'tRNS');
    write(this.buffer, this.idat_offs, byte4(this.idat_size - 12), 'IDAT');
    write(this.buffer, this.iend_offs, byte4(this.iend_size - 12), 'IEND');

    // initialize deflate header
    // eslint-disable-next-line no-bitwise
    let header = ((8 + (7 << 4)) << 8) | (3 << 6);
    header += 31 - (header % 31);

    write(this.buffer, this.idat_offs + 8, byte2(header));

    // initialize deflate block headers
    // eslint-disable-next-line no-bitwise
    for (let i = 0; (i << 16) - 1 < this.pix_size; i += 1) {
      let size: number;
      let bits: string;
      if (i + 0xffff < this.pix_size) {
        size = 0xffff;
        bits = '\x00';
      } else {
        // eslint-disable-next-line no-bitwise
        size = this.pix_size - (i << 16) - i;
        bits = '\x01';
      }
      write(
        this.buffer,
        // eslint-disable-next-line no-bitwise
        this.idat_offs + 8 + 2 + (i << 16) + (i << 2),
        bits,
        byte2lsb(size),
        // eslint-disable-next-line no-bitwise
        byte2lsb(~size),
      );
    }

    /* Create crc32 lookup table */
    for (let i = 0; i < 256; i += 1) {
      let c = i;
      for (let j = 0; j < 8; j += 1) {
        // eslint-disable-next-line no-bitwise
        if (c & 1) {
          // eslint-disable-next-line no-bitwise
          c = -306674912 ^ ((c >> 1) & 0x7fffffff);
        } else {
          // eslint-disable-next-line no-bitwise
          c = (c >> 1) & 0x7fffffff;
        }
      }
      this._crc32[i] = c;
    }
  }

  /**
   * Computes the index into a png for a given pixel.
   *
   * @param x - The x coordinate
   * @param y - The y coordinate
   * @returns The buffer index for the pixel
   */
  public index(x: number, y: number): number {
    const i = y * (this.width + 1) + x + 1;
    const j = this.idat_offs + 8 + 2 + 5 * Math.floor(i / 0xffff + 1) + i;
    return j;
  }

  /**
   * Converts a color and builds up the palette.
   *
   * @param red - Red component (0-255)
   * @param green - Green component (0-255)
   * @param blue - Blue component (0-255)
   * @param alpha - Alpha component (0-255)
   * @returns The palette color string
   */
  public color(
    red: number,
    green: number,
    blue: number,
    alpha: number = 255,
  ): string {
    // eslint-disable-next-line no-bitwise
    const color = (((((alpha << 8) | red) << 8) | green) << 8) | blue;

    if (typeof this.palette[color] === 'undefined') {
      if (this.pindex === this.depth) {
        return '\x00';
      }

      const ndx = this.plte_offs + 8 + 3 * this.pindex;

      this.buffer[ndx + 0] = String.fromCharCode(red);
      this.buffer[ndx + 1] = String.fromCharCode(green);
      this.buffer[ndx + 2] = String.fromCharCode(blue);
      this.buffer[this.trns_offs + 8 + this.pindex] =
        String.fromCharCode(alpha);

      // eslint-disable-next-line no-plusplus
      this.palette[color] = String.fromCharCode(this.pindex++);
    }
    return this.palette[color];
  }

  /**
   * Outputs a PNG string, Base64 encoded.
   *
   * @returns A Base64 encoded PNG string
   */
  public getBase64(): string {
    const s = this.getDump();

    const ch =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let c1: number;
    let c2: number;
    let c3: number;
    let e1: number;
    let e2: number;
    let e3: number;
    let e4: number;
    const l = s.length;
    let i = 0;
    let r = '';

    do {
      c1 = s.charCodeAt(i);
      // eslint-disable-next-line no-bitwise
      e1 = c1 >> 2;
      c2 = s.charCodeAt(i + 1);
      // eslint-disable-next-line no-bitwise
      e2 = ((c1 & 3) << 4) | (c2 >> 4);
      c3 = s.charCodeAt(i + 2);
      if (l < i + 2) {
        e3 = 64;
      } else {
        // eslint-disable-next-line no-bitwise
        e3 = ((c2 & 0xf) << 2) | (c3 >> 6);
      }
      if (l < i + 3) {
        e4 = 64;
      } else {
        // eslint-disable-next-line no-bitwise
        e4 = c3 & 0x3f;
      }
      r += ch.charAt(e1) + ch.charAt(e2) + ch.charAt(e3) + ch.charAt(e4);
      i += 3;
    } while (i < l);
    return r;
  }

  /**
   * Outputs a PNG string.
   *
   * @returns A PNG string
   */
  public getDump(): string {
    // compute adler32 of output pixels + row filter bytes
    const BASE = 65521; /* largest prime smaller than 65536 */
    const NMAX = 5552; /* NMAX is the largest n such that 255n(n+1)/2 + (n+1)(BASE-1) <= 2^32-1 */
    let s1 = 1;
    let s2 = 0;
    let n = NMAX;

    for (let y = 0; y < this.height; y += 1) {
      for (let x = -1; x < this.width; x += 1) {
        s1 += this.buffer[this.index(x, y)].charCodeAt(0);
        s2 += s1;
        n -= 1;
        if (n === 0) {
          s1 %= BASE;
          s2 %= BASE;
          n = NMAX;
        }
      }
    }
    s1 %= BASE;
    s2 %= BASE;
    write(
      this.buffer,
      this.idat_offs + this.idat_size - 8,
      // eslint-disable-next-line no-bitwise
      byte4((s2 << 16) | s1),
    );

    // compute crc32 of the PNG chunks
    const crc32 = (png: string[], offs: number, size: number): void => {
      let crc = -1;
      for (let i = 4; i < size - 4; i += 1) {
        crc =
          // eslint-disable-next-line no-bitwise
          this._crc32[(crc ^ png[offs + i].charCodeAt(0)) & 0xff] ^
          // eslint-disable-next-line no-bitwise
          ((crc >> 8) & 0x00ffffff);
      }
      // eslint-disable-next-line no-bitwise
      write(png, offs + size - 4, byte4(crc ^ -1));
    };

    crc32(this.buffer, this.ihdr_offs, this.ihdr_size);
    crc32(this.buffer, this.plte_offs, this.plte_size);
    crc32(this.buffer, this.trns_offs, this.trns_size);
    crc32(this.buffer, this.idat_offs, this.idat_size);
    crc32(this.buffer, this.iend_offs, this.iend_size);

    // convert PNG to string
    return `\x89PNG\r\n\x1A\n${this.buffer.join('')}`;
  }

  /**
   * Fills a rectangle with the specified color.
   *
   * @param x - The x coordinate
   * @param y - The y coordinate
   * @param w - The width
   * @param h - The height
   * @param color - The color to fill with
   */
  public fillRect(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string,
  ): void {
    for (let i = 0; i < w; i += 1) {
      for (let j = 0; j < h; j += 1) {
        this.buffer[this.index(x + i, y + j)] = color;
      }
    }
  }
}

/**
 * Converts HSL color to RGB helper function.
 *
 * @param p - First parameter
 * @param q - Second parameter
 * @param t - Third parameter
 * @returns RGB value component
 */
function hue2rgb(p: number, q: number, t: number): number {
  let tValue = t;
  if (tValue < 0) {
    tValue += 1;
  }
  if (tValue > 1) {
    tValue -= 1;
  }
  if (tValue < 1 / 6) {
    return p + (q - p) * 6 * tValue;
  }
  if (tValue < 1 / 2) {
    return q;
  }
  if (tValue < 2 / 3) {
    return p + (q - p) * (2 / 3 - tValue) * 6;
  }
  return p;
}

/**
 * Converts HSL color values to RGBA.
 *
 * @param h - Hue (0-1)
 * @param s - Saturation (0-1)
 * @param l - Lightness (0-1)
 * @returns RGBA color array
 */
function hsl2rgb(h: number, s: number, l: number): RGBAColor {
  let r: number;
  let g: number;
  let b: number;

  if (s === 0) {
    r = l;
    g = l;
    b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255), 255];
}

// Random number generation
const randseed: number[] = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

/**
 * Seeds the random number generator.
 *
 * @param seed - The seed string
 */
function seedrand(seed: string): void {
  for (let i = 0; i < randseed.length; i += 1) {
    randseed[i] = 0;
  }
  for (let i = 0; i < seed.length; i += 1) {
    randseed[i % 4] =
      // eslint-disable-next-line no-bitwise
      (randseed[i % 4] << 5) - randseed[i % 4] + seed.charCodeAt(i);
  }
}

/**
 * Generates a random number using Xorshift algorithm.
 *
 * @returns A random number between 0 and 1
 */
function rand(): number {
  // based on Java's String.hashCode(), expanded to 4 32bit values
  // eslint-disable-next-line no-bitwise
  const t = randseed[0] ^ (randseed[0] << 11);

  randseed[0] = randseed[1];
  randseed[1] = randseed[2];
  randseed[2] = randseed[3];
  // eslint-disable-next-line no-bitwise
  randseed[3] = randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8);

  // eslint-disable-next-line no-bitwise
  return (randseed[3] >>> 0) / ((1 << 31) >>> 0);
}

/**
 * Creates a random HSL color.
 *
 * @returns HSL color array
 */
function createColor(): HSLColor {
  // saturation is the whole color spectrum
  const h = Math.floor(rand() * 360);
  // saturation goes from 40 to 100, it avoids greyish colors
  const s = rand() * 60 + 40;
  // lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
  const l = (rand() + rand() + rand() + rand()) * 25;

  return [h / 360, s / 100, l / 100];
}

/**
 * Creates image data for the Blockies pattern.
 *
 * @param size - The size of the image
 * @returns Array of pixel data
 */
function createImageData(size: number): number[] {
  const width = size; // Only support square icons for now
  const height = size;

  const dataWidth = Math.ceil(width / 2);
  const mirrorWidth = width - dataWidth;

  const data: number[] = [];
  for (let y = 0; y < height; y += 1) {
    let row: number[] = [];
    for (let x = 0; x < dataWidth; x += 1) {
      // this makes foreground and background color to have a 43% (1/2.3) probability
      // spot color has 13% chance
      row[x] = Math.floor(rand() * 2.3);
    }
    const r = row.slice(0, mirrorWidth);
    r.reverse();
    row = row.concat(r);

    for (const value of row) {
      data.push(value);
    }
  }

  return data;
}

/**
 * Builds options for Blockies generation with defaults.
 *
 * @param opts - Partial options object
 * @returns Complete options object
 */
function buildOpts(opts: Partial<BlockiesOptions>): Required<BlockiesOptions> {
  if (!opts.seed) {
    throw new Error('No seed provided');
  }

  seedrand(opts.seed);

  return {
    size: 8,
    scale: 16,
    color: createColor(),
    bgcolor: createColor(),
    spotcolor: createColor(),
    ...opts,
    seed: opts.seed,
  };
}

/**
 * Utility class with the single responsibility
 * of caching Blockies Data URIs
 */
export class Blockies {
  static cache: Record<string, string> = {};
}

/**
 * Generate a Blockies data URL for a given address
 *
 * @param address The address to generate a Blockies for
 * @returns A data URL string containing the Blockies image
 */
export function toDataUrl(address: string): string {
  const cache = Blockies.cache[address];
  if (address && cache) {
    return cache;
  }

  const opts = buildOpts({ seed: address.toLowerCase() });

  const imageData = createImageData(opts.size);
  const width = Math.sqrt(imageData.length);

  const p = new PNG(opts.size * opts.scale, opts.size * opts.scale, 3);
  // Register background color in PNG palette (needed for pixels with value 0)
  // This call adds the background color as the first palette entry, which is
  // essential for proper rendering of background pixels in the Blockies
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const bgcolor = p.color(...hsl2rgb(...opts.bgcolor));
  const color = p.color(...hsl2rgb(...opts.color));
  const spotcolor = p.color(...hsl2rgb(...opts.spotcolor));

  for (let i = 0; i < imageData.length; i += 1) {
    const row = Math.floor(i / width);
    const col = i % width;
    // if data is 0, leave the background
    if (imageData[i]) {
      // if data is 2, choose spot color, if 1 choose foreground
      const pngColor = imageData[i] === 1 ? color : spotcolor;
      p.fillRect(
        col * opts.scale,
        row * opts.scale,
        opts.scale,
        opts.scale,
        pngColor,
      );
    }
  }
  const ret = `data:image/png;base64,${p.getBase64()}`;
  Blockies.cache[address] = ret;
  return ret;
}
