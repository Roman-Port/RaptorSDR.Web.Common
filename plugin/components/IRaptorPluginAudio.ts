export default interface IRaptorPluginAudio {

    GetName(): string;

    Start(): void;
    SetVolume(volume: number): void;
    Stop(): void;

}