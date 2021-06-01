import RaptorEventDispaptcher from "../RaptorEventDispatcher";

export default interface IRaptorEndpoint {

    SendMessage(message: any): void;
    SendMessageGetResponse(message: any): Promise<any>;

    OnMessage: RaptorEventDispaptcher<any>;

}