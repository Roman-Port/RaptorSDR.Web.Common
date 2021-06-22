import IRaptorConnection from "../../IRaptorConnection";
import IRaptorSettingsRegion from "../setting/IRaptorSettingsRegion";
import RaptorSettingsRegionBuilder from "../setting/RaptorSettingsRegionBuilder";
import { RaptorSettingsTab } from "../setting/RaptorSettingsTab";

export default interface IRaptorWindowContext {

    conn: IRaptorConnection;
    id: string;

    info: any;
    persist: any;

    CreateSettingsRegion(name: string, id: string): RaptorSettingsRegionBuilder; //Simply creates a new region but does not apply it
    RegisterSettingsRegionSidebar(region: IRaptorSettingsRegion, tab: RaptorSettingsTab): void; //Binds that settings region to only appear when this window is shown

}