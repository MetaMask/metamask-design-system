import { createComponent, parseArgs } from './create-component';

const args = parseArgs(process.argv.slice(2));
createComponent(args).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
