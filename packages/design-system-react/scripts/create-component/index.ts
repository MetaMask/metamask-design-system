import { createComponent } from './create-component';

createComponent().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
