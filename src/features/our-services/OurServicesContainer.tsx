'use client';
import {Footer} from "@/shared/components/layout/footer/Footer";
import {ServiceForm} from "@/features/our-services/ServiceForm/ServiceForm";
import ServicesList from "@/features/our-services/ServicesList/ServicesList";

export default function OurServicesContainer() {
    return (
        <main>
            <ServicesList />
            <ServiceForm />
            <Footer/>
        </main>
    );
}