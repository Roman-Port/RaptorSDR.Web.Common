import IRaptorPluginRegisteredWindowInstance from "./IRaptorPluginRegisteredWindowInstance";
import IRaptorWindowInstanceInfo from "./window/IRaptorWindowInstanceInfo";

export default interface IRaptorPluginRegisteredWindow {

    GetName(): string;
    RegisterInstance(info: IRaptorWindowInstanceInfo): IRaptorPluginRegisteredWindowInstance;

}