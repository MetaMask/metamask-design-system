const { execSync } = require('child_process');

try {
  console.log('Step 1: Cleaning up previous build artifacts...');
  execSync('rm -rf tsconfig.build.tsbuildinfo dist', { stdio: 'inherit' });

  console.log('Step 2: Generating icons...');
  execSync('tsx scripts/generate-icons.ts', { stdio: 'inherit' });

  console.log('Step 3: Building the project...');
  execSync('tsc --project tsconfig.build.json', { stdio: 'inherit' });

  // Copy SVG files
  console.log('Step 4: Copying SVG assets...');

  // Copy Icon assets
  execSync('mkdir -p dist/components/Icon/assets', {
    stdio: 'inherit',
  });
  execSync(
    'cp -R src/components/Icon/assets/*.svg dist/components/Icon/assets/',
    {
      stdio: 'inherit',
    },
  );

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build process failed:', error.message);
  throw new Error('Build failed');
}
