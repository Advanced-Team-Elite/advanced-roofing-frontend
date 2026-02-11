import { ServicesList } from "@/features/our-services/ServicesList/ServicesList";
import { ServiceForm } from "@/features/our-services/ServiceForm/ServiceForm";

export default function OurServicesPage() {
    return (
        <main>
            <ServicesList />
            <ServiceForm />
        </main>
    );
}