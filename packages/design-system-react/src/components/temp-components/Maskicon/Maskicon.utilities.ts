import { stringToBytes, KnownCaipNamespace } from '@metamask/utils';
import { isAddress as isSolanaAddress } from '@solana/addresses';

// /////////////////////////////////////////////////////
// Address validation
// /////////////////////////////////////////////////////
/**
 * Generates a numeric seed for Ethereum (eip155) addresses.
 */
export function generateSeedEthereum(address: string): number {
  // Example: parse the first 8 chars of the address after '0x'
  const addr = address.slice(2, 10);
  return parseInt(addr, 16);
}

/**
 * Generates a byte-array seed for non-Ethereum addresses (Solana, Bitcoin, etc.).
 */
export function generateSeedNonEthereum(address: string): number[] {
  return Array.from(stringToBytes(address.normalize('NFKC').toLowerCase()));
}

/**
 * Dynamically checks if the address is Bitcoin or Solana; otherwise defaults to Ethereum.
 * Returns a Promise that resolves to one of the known CAIP-2 namespaces.
 *
 * In this update, if the address starts with "0x", we'll assume it's Ethereum (Eip155)
 * and avoid the dynamic import that can cause the "Requiring unknown module '2021'" error.
 */
export async function getCaipNamespaceFromAddress(
  address: string,
): Promise<KnownCaipNamespace> {
  // If the address starts with '0x', assume Ethereum.
  if (address.startsWith('0x')) {
    return KnownCaipNamespace.Eip155;
  }

  // Check for CAIP-10 formatted addresses
  if (address.includes(':')) {
    const [namespace] = address.split(':');
    const nsLower = namespace.toLowerCase();
    if (nsLower === 'bip122') {
      return KnownCaipNamespace.Bip122;
    }
    if (nsLower === 'solana') {
      return KnownCaipNamespace.Solana;
    }
  }

  // Attempt to use bitcoin-address-validation if available.
  try {
    const { validate, Network } = await import('bitcoin-address-validation');
    if (
      validate(address, Network.mainnet) ||
      validate(address, Network.testnet)
    ) {
      return KnownCaipNamespace.Bip122;
    }
  } catch {
    // If the import fails, fall through.
  }

  // Fallback: if it looks like a Solana address, return Solana.
  if (isSolanaAddress(address)) {
    return KnownCaipNamespace.Solana;
  }

  // Default to Ethereum.
  return KnownCaipNamespace.Eip155;
}

// /////////////////////////////////////////////////////
// Maskicon SVG Creation
// /////////////////////////////////////////////////////
// Color Palettes
const neutralPairs = [
  ['#FF5C16', '#FCFCFC'],
  ['#FF5C16', '#131416'],
  ['#D075FF', '#FCFCFC'],
  ['#D075FF', '#131416'],
  ['#BAF24A', '#FCFCFC'],
  ['#BAF24A', '#131416'],
  ['#89B0FF', '#FCFCFC'],
  ['#89B0FF', '#131416'],
  ['#FCFCFC', '#FF5C16'],
  ['#131416', '#FF5C16'],
  ['#FCFCFC', '#D075FF'],
  ['#131416', '#D075FF'],
  ['#FCFCFC', '#BAF24A'],
  ['#131416', '#BAF24A'],
  ['#FCFCFC', '#89B0FF'],
  ['#131416', '#89B0FF'],
];

const tonalPairs = [
  ['#FFA680', '#FF5C16'],
  ['#661800', '#FF5C16'],
  ['#EAC2FF', '#D075FF'],
  ['#3D065F', '#D075FF'],
  ['#E5FFC3', '#BAF24A'],
  ['#013330', '#BAF24A'],
  ['#CCE7FF', '#89B0FF'],
  ['#190066', '#89B0FF'],
  ['#FF5C16', '#FFA680'],
  ['#FF5C16', '#661800'],
  ['#D075FF', '#EAC2FF'],
  ['#D075FF', '#3D065F'],
  ['#BAF24A', '#E5FFC3'],
  ['#BAF24A', '#013330'],
  ['#89B0FF', '#CCE7FF'],
  ['#89B0FF', '#190066'],
  ['#661800', '#FFA680'],
  ['#FFA680', '#661800'],
  ['#3D065F', '#EAC2FF'],
  ['#EAC2FF', '#3D065F'],
  ['#013330', '#E5FFC3'],
  ['#E5FFC3', '#013330'],
  ['#190066', '#CCE7FF'],
  ['#CCE7FF', '#190066'],
];

const complementaryPairs = [
  ['#EAC2FF', '#013330'],
  ['#013330', '#EAC2FF'],
  ['#CCE7FF', '#661800'],
  ['#661800', '#CCE7FF'],
  ['#E5FFC3', '#3D065F'],
  ['#3D065F', '#E5FFC3'],
  ['#FFA680', '#190066'],
  ['#190066', '#FFA680'],
  ['#CCE7FF', '#013330'],
  ['#013330', '#CCE7FF'],
];

const colorPairs = neutralPairs.concat(tonalPairs).concat(complementaryPairs);

/** SDBM hash function */
export function sdbmHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
  }
  return hash;
}

/** Convert numeric/byte-array seed to a 6+ length string */
export function seedToString(seed: number | number[]): string {
  if (typeof seed === 'number') {
    let hex = seed.toString(16);
    if (hex.length < 6) {
      hex = hex.padEnd(6, '0');
    }
    return hex;
  }
  if (Array.isArray(seed)) {
    let hex = seed.map((b) => b.toString(16).padStart(2, '0')).join('');
    if (hex.length < 6) {
      hex = hex.padEnd(6, '0');
    }
    return hex;
  }
  return 'seed000';
}

/**
 * Builds a full <svg> string containing the Maskicon shapes.
 */
export function createMaskiconSVG(seed: number | number[], size = 100): string {
  // 1) Convert seed to string, then hash
  const str = seedToString(seed);
  const hashVal = sdbmHash(str);

  // 2) Pick color pair based on the hash
  const colorPairIndex = Math.abs(hashVal) % colorPairs.length;
  const [bgColor, fgColor] = colorPairs[colorPairIndex];

  // 3) Geometry setup
  const grid = 2;
  const margin = size * 0.25;
  const innerSize = size - 2 * margin;
  const cellSize = innerSize / grid;

  let pathData = '';
  const filledGrid: boolean[][] = Array.from({ length: grid }, () =>
    Array(grid).fill(false),
  );

  const startX = Math.floor(grid / 2);
  const startY = Math.floor(grid / 2);
  const stack = [[startX, startY]];
  filledGrid[startX][startY] = true;

  while (stack.length > 0) {
    const [x, y] = stack.pop()!;
    const cellHash = Math.abs(hashVal >> (x * 3 + y * 5)) & 15;

    const neighbors: [number, number][] = [];
    const directions: [number, number][] = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
    ];
    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < grid && ny >= 0 && ny < grid && !filledGrid[nx][ny]) {
        neighbors.push([nx, ny]);
      }
    }
    while (neighbors.length > 0) {
      const idx = Math.abs(cellHash + neighbors.length) % neighbors.length;
      const [nx, ny] = neighbors.splice(idx, 1)[0];
      stack.push([nx, ny]);
      filledGrid[nx][ny] = true;
    }

    // Determine shape: square or right triangle (with rotation)
    const rotation = (cellHash % 4) * 90;
    const isSquare = cellHash % 5 === 0; // ~20% chance
    const cx = margin + x * cellSize;
    const cy = margin + y * cellSize;

    if (isSquare) {
      pathData += `M${cx},${cy} h${cellSize} v${cellSize} h-${cellSize}z `;
    } else {
      if (rotation === 0) {
        pathData += `M${cx},${cy} h${cellSize} v${cellSize}z `;
      } else if (rotation === 90) {
        pathData += `M${cx + cellSize},${cy} v${cellSize} h-${cellSize}z `;
      } else if (rotation === 180) {
        pathData += `M${cx + cellSize},${cy + cellSize} h-${cellSize} v-${cellSize}z `;
      } else {
        pathData += `M${cx},${cy + cellSize} v-${cellSize} h${cellSize}z `;
      }
    }
  }

  // 4) Construct final SVG string (always rectangular)
  let svgString = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`;
  svgString += `<rect width="${size}" height="${size}" fill="${bgColor}" />`;
  svgString += `<path d="${pathData}" fill="${fgColor}" />`;
  svgString += `</svg>`;
  return svgString;
}

// /////////////////////////////////////////////////////
// Maskicon SVG Creation and Caching
// /////////////////////////////////////////////////////
type CacheKey = string;
const svgCache: Record<CacheKey, string> = {};

/**
 * Returns a Promise that resolves to the final <svg> string for the given address.
 */
export async function getMaskiconSVG(
  address: string,
  size: number,
): Promise<string> {
  const cacheKey = `${address.toLowerCase()}:${size}`;
  if (svgCache[cacheKey]) {
    return svgCache[cacheKey];
  }

  const namespace = await getCaipNamespaceFromAddress(address);
  let seed: number | number[];

  if (namespace === KnownCaipNamespace.Eip155) {
    seed = generateSeedEthereum(address);
  } else {
    seed = generateSeedNonEthereum(address);
  }

  const svgString = createMaskiconSVG(seed, size);
  svgCache[cacheKey] = svgString;
  return svgString;
}
