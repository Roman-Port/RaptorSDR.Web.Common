import IRaptorRadio from "./radio/IRaptorRadio";
import IRaptorVFO from "./radio/IRaptorVFO";
import { RaptorLogLevel } from "./RaptorLogLevel";
import IRaptorMenu from "./ui/menu/IRaptorMenu";
import RaptorMenuBuilder from "./ui/menu/RaptorMenuBuilder";
import IRaptorSettingsRegion from "./ui/setting/IRaptorSettingsRegion";
import { RaptorSettingsTab } from "./ui/setting/RaptorSettingsTab";
import IRaptorStream from "./web/IRaptorStream";
import IRaptorPrimitiveDataProvider from "./web/providers/IRaptorPrimitiveDataProvider";
import IRaptorSelectableDataProvider from "./web/providers/IRaptorSelectableDataProvider";

export default interface IRaptorConnection {

    GetDataProvider<T>(name: string): T;
    GetPrimitiveDataProvider<T>(name: string): IRaptorPrimitiveDataProvider<T>;
    GetSelectableDataProvider(name: string): IRaptorSelectableDataProvider;
    GetStream(id: string): IRaptorStream;

    ShowMenu(builder: RaptorMenuBuilder): IRaptorMenu;

    CreateFileSaveDialog(title: string): Promise<string>;
    CreateFileOpenDialog(title: string): Promise<string>;

    RegisterSettingsRegionSidebar(region: IRaptorSettingsRegion, tab: RaptorSettingsTab): void;

    Log(level: RaptorLogLevel, topic: string, message: string): void;

    Radio: IRaptorRadio;
    VFO: IRaptorVFO;

}