import RaptorEventDispatcher from "../RaptorEventDispatcher";
import RaptorUtil from "../util/RaptorUtil";
import IRaptorEndpoint from "./IRaptorEndpoint";

export abstract class RaptorBaseEndpoint implements IRaptorEndpoint {

    constructor() {
        this.OnMessage = new RaptorEventDispatcher<any>();
    }

    abstract SendMessage(message: any): void;

    async SendMessageGetResponse(message: any): Promise<any> {
        //Generate a token and append it
        var token = RaptorUtil.GenerateRandomString(8);
        message["token"] = token;

        //Register for callback
        var p = new Promise((resolve) => {
            this.OnMessage.Bind((response: any) => {
                if (response["token"] == token) {
                    resolve(response);
                }
            });
        });

        //Send message
        this.SendMessage(message);

        return p;
    }

    OnMessage: RaptorEventDispatcher<any>;

}