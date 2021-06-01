export default class RaptorPanelBuilder {

    constructor() {
        this.content = document.createElement("div");
        this.content.classList.add("rsys_panel");
    }

    private content: HTMLElement;

    Add(element: HTMLElement): RaptorPanelBuilder {
        this.content.appendChild(element);
        return this;
    }

    AddText(text: string): RaptorPanelBuilder {
        var e = document.createElement("div");
        e.classList.add("rsys_panel_text");
        e.innerText = text;
        return this.Add(e);
    }

    Build(): HTMLElement {
        return this.content;
    }

}