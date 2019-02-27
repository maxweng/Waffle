export interface Config {
    sourcesPath: string;
    targetPath?: string;
    npmPath: string;
    compiler?: 'native' | 'dockerized-solc' | 'solcjs';
    'docker-tag'?: string;
    solcVersion?: string;
    legacyOutput?: string;
    allowedPaths?: string[];
    compilerOptions?: Record<string, any>;
}
declare const defaultConfig: Config;
export default defaultConfig;
