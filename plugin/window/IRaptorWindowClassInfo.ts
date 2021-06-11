import IRaptorWindow from "../../ui/core/IRaptorWindow";

export default interface IRaptorWindowClassInfo {

    displayName: string;
    id: string;
    createInstance: (info: any, persist: any) => IRaptorWindow;

}