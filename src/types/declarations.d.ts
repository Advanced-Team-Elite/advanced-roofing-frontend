// src/declarations.d.ts
declare module 'react-compare-image' {
    import * as React from 'react';

    export interface ReactCompareImageProps {
        leftImage: string;
        rightImage: string;
        aspectRatio?: 'wide' | 'custom';
        handle?: React.ReactNode;
        handleColor?: string;
        handleSize?: number;
        hover?: boolean;
        leftImageAlt?: string;
        leftImageCss?: object;
        leftImageLabel?: string;
        onSliderPositionChange?: (position: number) => void;
        rightImageAlt?: string;
        rightImageCss?: object;
        rightImageLabel?: string;
        skeleton?: React.ReactNode;
        sliderLineColor?: string;
        sliderLineWidth?: number;
        sliderPositionPercentage?: number;
        vertical?: boolean;
    }

    const ReactCompareImage: React.FC<ReactCompareImageProps>;
    export default ReactCompareImage;
}