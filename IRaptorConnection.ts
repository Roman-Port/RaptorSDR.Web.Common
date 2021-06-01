import IRaptorRadio from "./radio/IRaptorRadio";
import IRaptorVFO from "./radio/IRaptorVFO";
import IRaptorMenu from "./ui/menu/IRaptorMenu";
import RaptorMenuBuilder from "./ui/menu/RaptorMenuBuilder";
import IRaptorStream from "./web/IRaptorStream";
import IRaptorPrimitiveDataProvider from "./web/providers/IRaptorPrimitiveDataProvider";
import IRaptorSelectableDataProvider from "./web/providers/IRaptorSelectableDataProvider";

export default interface IRaptorConnection {

    GetDataProvider<T>(name: string): T;
    GetPrimitiveDataProvider<T>(name: string): IRaptorPrimitiveDataProvider<T>;
    GetSelectableDataProvider(name: string): IRaptorSelectableDataProvider;
    GetStream(id: string): IRaptorStream;

    ShowMenu(builder: RaptorMenuBuilder): IRaptorMenu;

    Radio: IRaptorRadio;
    VFO: IRaptorVFO;

}