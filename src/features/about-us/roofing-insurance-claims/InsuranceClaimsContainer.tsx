"use client";
import React from 'react';
import SharedBanner from "@/features/about-us/SharedBanner";

const InsuranceClaimsContainer = () => {
    return (
        <main>
            <SharedBanner
                title="Roofing Insurance Claims"
                isCityVisible={false}
            />
            {/* Contenido específico de Insurance aquí */}
        </main>
    );
};

export default InsuranceClaimsContainer;