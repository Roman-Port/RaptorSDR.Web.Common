import IRaptorWindow from "../../ui/core/IRaptorWindow";
import IRaptorWindowContext from "../../ui/core/IRaptorWindowContext";
import IRaptorWindowInfo from "../../ui/core/IRaptorWindowInfo";
import RaptorSize from "../../ui/RaptorSize";

export default interface IRaptorWindowClassInfo {

    displayName: string;
    id: string;
    sizeMin: RaptorSize,
    sizeMax: RaptorSize,
    sizeDefault: RaptorSize,
    hideHeader: boolean,
    createInstance: (data: IRaptorWindowContext) => IRaptorWindow;
    createDummy: (info: IRaptorWindowInfo) => HTMLElement;

}