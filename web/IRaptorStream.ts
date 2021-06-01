export default interface IRaptorStream {

    AddQueryArgument(key: string, value: string): IRaptorStream;
    AsWebSocket(): WebSocket;

}