import type { App } from 'vue';
export * from './components';
export declare type Options = {
    prefix: string;
};
export declare const install: (app: App, options?: Options) => App<any>;
declare const _default: {
    install: (app: App<any>, options?: Options) => App<any>;
};
export default _default;
