import { RaptorBaseEndpoint } from "../../../src/framework/web/RaptorBaseEndpoint";
import RaptorEventDispaptcher from "../../RaptorEventDispatcher";
import RaptorUtil from "../../util/RaptorUtil";
import IRaptorEndpoint from "../IRaptorEndpoint";

export default class RaptorDispatcherOpcode {

    constructor(parent: IRaptorEndpoint) {
        this.parent = parent;
        this.subscriptions = [];
    }

    private parent: IRaptorEndpoint;
    private subscriptions: RaptorDispatcherOpcode_Subscription[];

    CreateSubscription(opcode: string): IRaptorEndpoint {
        var sub = new RaptorDispatcherOpcode_Subscription(this.parent, opcode);
        this.subscriptions.push(sub);
        return sub;
    }

}

class RaptorDispatcherOpcode_Subscription extends RaptorBaseEndpoint {

    constructor(parent: IRaptorEndpoint, opcode: string) {
        super();
        this.parent = parent;
        this.opcode = opcode;
        parent.OnMessage.Bind((message: any) => {
            if (message["op"] == this.opcode) {
                this.OnMessage.Fire(message["d"]);
            }
        });
    }

    SendMessage(message: any): void {
        this.parent.SendMessage({
            "op": this.opcode,
            "d": message
        });
    }

    private parent: IRaptorEndpoint;
    private opcode: string;

}