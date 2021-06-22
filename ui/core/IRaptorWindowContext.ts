import IRaptorConnection from "../../IRaptorConnection";
import IRaptorSettingsRegion from "../setting/IRaptorSettingsRegion";
import RaptorSettingsRegionBuilder from "../setting/RaptorSettingsRegionBuilder";

export default interface IRaptorWindowContext {

    conn: IRaptorConnection;
    id: string;

    info: any;
    persist: any;

    CreateSettingsRegion(name: string, id: string): RaptorSettingsRegionBuilder; //Simply creates a new region but does not apply it
    RegisterSettingsRegion(region: IRaptorSettingsRegion): void; //Binds that settings region to only appear when this window is shown

}