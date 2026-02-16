// app/roofing/
import {} from "@/features/roofing/flat-roof-repair/FlatRoofRepairContainer";
import {
    RoofInstallationReplacementContainer
} from "@/features/roofing/roof-installation-replacement/RoofInstallationReplacementContainer";
import {RoofInspectionsContainer} from "@/features/roofing/roof-inspections/RoofInspectionsContainer";

export default function Page() {
    return (
        <main>
            <RoofInspectionsContainer />
        </main>
    );
}