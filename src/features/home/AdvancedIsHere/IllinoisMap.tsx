// components/IllinoisMap.tsx
import React from 'react';

export const IllinoisMap = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 300 500" // Asegúrate de usar el viewBox original de tu SVG
        {...props}
    >
        <path
            d="m 39.946192,28.90153 0.02721,4.277893 0.04204,3.441812 -3.974542,0.103094 -0.108232,-4.490231 0.1316,-0.0034 -0.0676,-2.259618 -0.04176,-1.123859 3.989514,-0.130091 0.002,0.184606"
            id="Vermilion"
        />
        <path
            d="m 33.967246,22.224964 5.859848,-0.249679 0.117286,6.741638 -3.989511,0.13009 -1.780462,-0.0013 -0.207161,-6.620756"
            id="Iroquois"
        />
    </svg>
);