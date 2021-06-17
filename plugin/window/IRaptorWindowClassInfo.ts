import IRaptorWindow from "../../ui/core/IRaptorWindow";
import RaptorSize from "../../ui/RaptorSize";

export default interface IRaptorWindowClassInfo {

    displayName: string;
    id: string;
    sizeMin: RaptorSize,
    sizeMax: RaptorSize,
    sizeDefault: RaptorSize,
    hideHeader: boolean,
    createInstance: (info: any, persist: any) => IRaptorWindow;

}