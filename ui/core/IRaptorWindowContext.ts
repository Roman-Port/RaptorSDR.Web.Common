import IRaptorConnection from "../../IRaptorConnection";
import IRaptorSettingsRegion from "../setting/IRaptorSettingsRegion";
import RaptorSettingsRegionBuilder from "../setting/RaptorSettingsRegionBuilder";
import { RaptorSettingsTab } from "../setting/RaptorSettingsTab";
import IRaptorWindowInfo from "./IRaptorWindowInfo";

export default interface IRaptorWindowContext extends IRaptorWindowInfo {

    conn: IRaptorConnection;
    persist: any;

    CreateSettingsRegion(name: string, id: string): RaptorSettingsRegionBuilder; //Simply creates a new region but does not apply it
    RegisterSettingsRegionSidebar(region: IRaptorSettingsRegion, tab: RaptorSettingsTab): void; //Binds that settings region to only appear when this window is shown

}