export default interface IRaptorPluginAudio {

    GetName(): string;

    Start(): Promise<void>;
    SetVolume(volume: number): void;
    Stop(): Promise<void>;

}