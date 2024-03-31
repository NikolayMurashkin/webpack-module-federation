declare module '*.module.scss' {
    interface ClassNames {
        [className: string]: string;
    }
    const classNames: ClassNames;
    export = classNames;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.svg' {
    import { FC, SVGProps } from 'react';
    const content: FC<SVGProps<SVGElement>>;
    export default content;
}

declare const __PLATFORM__: 'mobile' | 'desktop';
declare const __MODE__: 'development' | 'production';
