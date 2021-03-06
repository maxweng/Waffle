import { Config } from '../config/config';
import { ImportFile } from '@resolver-engine/imports';
export declare function compileSolcjs(config: Config): (sources: ImportFile[], findImports: (file: string) => any) => Promise<any>;
export declare function findInputs(files: string[]): any;
