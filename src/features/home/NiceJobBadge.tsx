'use client';

import Script from 'next/script';

export default function NiceJobBadge() {
    // Opcional: Si deseas que no intente cargar en localhost y evite el error de consola:
    // if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    //     return <div className="p-4 text-center text-xs text-gray-400">[NiceJob Badge (Disabled on Localhost)]</div>;
    // }

    return (
        <div className="flex justify-center items-center my-6">
            <div className="nj-badge" data-show-reviews="1" />
            <Script
                src="https://cdn.nicejob.co/js/sdk.min.js?id=7831c254-c2ab-4227-b769-bdeaec036bef"
                strategy="lazyOnload"
                onError={(e) => {
                    console.log('NiceJob SDK failed to load in local environment:', e);
                }}
            />
        </div>
    );
}