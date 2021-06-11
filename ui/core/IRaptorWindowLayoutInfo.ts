import RaptorSize from "../RaptorSize";
import { RaptorWindowMounting } from "./RaptorWindowMounting";

//Contains positioning info about a window
export default interface IRaptorWindowLayoutInfo {

    mount: RaptorWindowMounting;
    index: number;
    size: RaptorSize;
    posX: number;
    posY: number;

}