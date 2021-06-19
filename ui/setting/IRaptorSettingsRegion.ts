import IRaptorSettingsComponent from "./IRaptorSettingsComponent";
import { RaptorSettingsTab } from "./RaptorSettingsTab";

export default interface IRaptorSettingsRegion {

    name: string;
    id: string;
    components: IRaptorSettingsComponent[];

}