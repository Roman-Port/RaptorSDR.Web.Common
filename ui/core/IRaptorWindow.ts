import RaptorSize from "../RaptorSize";

export default interface IRaptorWindow {

    GetWindowName(): string;

    CreateWindow(window: HTMLElement): void;
    ResizeWindow(width: number, height: number): void;
    DestoryWindow(): void;

}