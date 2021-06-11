export default class RaptorWebError extends Error {

    constructor(response: any) {
        super(response["error_caption"]);
        this.caption = response["error_caption"];
        this.body = response["error_body"];
    }

    caption: string;
    body: string;

}