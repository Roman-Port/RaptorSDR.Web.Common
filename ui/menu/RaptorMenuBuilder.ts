import IRaptorMenu from "./IRaptorMenu";
import { RaptorMenuButtonStatus } from "./RaptorMenuButtonStatus";

export default class RaptorMenuBuilder {

    constructor(width: number, height: number) {
        //Create window
        this.window = document.createElement("div");
        this.window.style.width = width + "px";
        this.window.style.height = height + "px";
        this.window.classList.add("rsys_menu_box");

        //Create window content
        this.content = document.createElement("div");
        this.content.classList.add("rsys_menu_content");
        this.window.appendChild(this.content);

        //Create window footer
        this.footer = document.createElement("div");
        this.footer.classList.add("rsys_menu_footer");
        this.window.appendChild(this.footer);
    }

    private window: HTMLElement;
    private content: HTMLElement;
    private footer: HTMLElement;

    /* Title */

    SetTitleCustom(text: string, color: string): RaptorMenuBuilder {
        var t = document.createElement("div");
        t.classList.add("rsys_menu_title");
        t.innerText = text;
        t.style.backgroundColor = color;
        this.window.insertBefore(t, this.window.firstChild);
        return this;
    }

    SetTitleNegative(text: string): RaptorMenuBuilder {
        this.SetTitleCustom(text, "#f94747");
        return this;
    }

    SetTitleNeutral(text: string): RaptorMenuBuilder {
        this.SetTitleCustom(text, "#4a4b4c");
        return this;
    }

    SetTitlePositive(text: string): RaptorMenuBuilder {
        this.SetTitleCustom(text, "#3882dc");
        return this;
    }

    /* Nav Buttons */

    private NavBtnAdd(text: string, classname: string, callback: (menu: IRaptorMenu) => void, id?: string) {
        var t = document.createElement("div");
        t.classList.add("rsys_menu_footer_btn");
        t.classList.add(classname);
        t.innerText = text;
        t.addEventListener("click", () => callback(this.GetBoundMenu()));
        (t as any)._xraptor_id = id;
        this.footer.appendChild(t);
    }

    NavBtnAddNegative(text: string, callback: (menu: IRaptorMenu) => void, id?: string): RaptorMenuBuilder {
        this.NavBtnAdd(text, "rsys_menu_footer_btn_negative", callback, id);
        return this;
    }

    NavBtnAddNeutral(text: string, callback: (menu: IRaptorMenu) => void, id?: string): RaptorMenuBuilder {
        this.NavBtnAdd(text, "rsys_menu_footer_btn_neutral", callback, id);
        return this;
    }

    NavBtnAddPositive(text: string, callback: (menu: IRaptorMenu) => void, id?: string): RaptorMenuBuilder {
        this.NavBtnAdd(text, "rsys_menu_footer_btn_positive", callback, id);
        return this;
    }

    NavBtnAddCustom(element: HTMLElement): RaptorMenuBuilder {
        this.footer.appendChild(element);
        return this;
    }

    NavBtnSetState(id: string, status: RaptorMenuButtonStatus): RaptorMenuBuilder {
        for (var i = 0; i < this.footer.children.length; i++) {
            if ((this.footer.children[i] as any)._xraptor_id == id) {
                this.footer.children[i].classList.remove("rsys_menu_footer_btn_disabled");
                this.footer.children[i].classList.remove("loading_btn");
                switch (status) {
                    case RaptorMenuButtonStatus.Disabled: this.footer.children[i].classList.add("rsys_menu_footer_btn_disabled"); break;
                    case RaptorMenuButtonStatus.Loading: this.footer.children[i].classList.add("loading_btn"); break;
                }
            }
        }
        return this;
    }

    /* Misc */

    private GetBoundMenu(): IRaptorMenu {
        return (this.window as any)._xraptor_menu as IRaptorMenu;
    }

    SetContent(dom: HTMLElement): RaptorMenuBuilder {
        this.content.appendChild(dom);
        return this;
    }

    Build(): HTMLElement {
        return this.window;
    }

}