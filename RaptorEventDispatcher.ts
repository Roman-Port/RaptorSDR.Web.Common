export default class RaptorEventDispaptcher<T> {

    constructor() {
        this.subscriptions = [];
    }

    protected subscriptions: ((payload: T) => any)[];

    Bind(callback: (payload: T) => any) {
        this.subscriptions.push(callback);
    }

    Unbind(callback: (payload: T) => any): boolean {
        for (var i = 0; i < this.subscriptions.length; i++) {
            if (this.subscriptions[i] == callback) {
                this.subscriptions.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    Fire(payload: T) {
        for (var i = 0; i < this.subscriptions.length; i++) {
            var result = this.subscriptions[i](payload);
            if (result != null && result === true) {
                this.subscriptions.splice(i);
                i--;
			}
        }
    }

}