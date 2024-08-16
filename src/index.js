import exportFile, {value as valueNamedImport} from './exportFile.js';

export default function () {
  // destructuring from import file results in undefined variable
  // note that the compiled code references a key that doesn't exist
  const {value: destructuredDefaultProperty} = exportFile;

  // non destructured syntax works fine
  const defaultProperty = exportFile.value;

  // all values are defined except from the destructured default import
  return `${valueNamedImport} ${defaultProperty} ${destructuredDefaultProperty}`;
}
