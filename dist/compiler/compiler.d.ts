import { Config } from '../config/config';
export declare function compileProject(configPath: string): Promise<void>;
export declare function compileAndSave(config: Config): Promise<void>;
export declare function compile(config: Config): Promise<any>;
