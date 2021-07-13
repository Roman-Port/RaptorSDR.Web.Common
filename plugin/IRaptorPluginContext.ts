import IRaptorConnection from "../IRaptorConnection";
import IRaptorWindow from "../ui/core/IRaptorWindow";
import RaptorMenuBuilder from "../ui/menu/RaptorMenuBuilder";
import IRaptorEndpoint from "../web/IRaptorEndpoint";
import IRaptorPluginAudio from "./components/IRaptorPluginAudio";
import IRaptorPluginPackage from "./IRaptorPluginPackage";
import IRaptorPluginRegisteredWindow from "./IRaptorPluginRegisteredWindow";
import IRaptorWindowClassInfo from "./window/IRaptorWindowClassInfo";

export default interface IRaptorPluginContext {
    conn: IRaptorConnection;

    GetName(): string;
    GetDeveloper(): string;
    GetId(): string;

    GetPackage(id: string): IRaptorPluginPackage;

    RegisterWindowClass(info: IRaptorWindowClassInfo): IRaptorPluginRegisteredWindow;
    RegisterComponentAudio(audio: IRaptorPluginAudio): void;

    CreatePluginRpcEndpoint(endpoint: string): IRaptorEndpoint;

    ShowMenu(menu: RaptorMenuBuilder): void;
}