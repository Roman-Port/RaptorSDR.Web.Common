import RaptorUiUtil from "../../../../src/framework/ui/RaptorUiUtil";
import IRaptorConfigurable from "../../../misc/IRaptorConfigurable";
import RaptorBaseGenericOption from "./RaptorBaseGenericOption";

export default class RaptorBooleanGenericOption extends RaptorBaseGenericOption<boolean> {

    constructor(name: string, option: IRaptorConfigurable<boolean>, trueText: string, falseText: string) {
        super(name, option);
        this.trueText = trueText;
        this.falseText = falseText;
    }

    private trueText: string;
    private falseText: string;

    protected BuildInput(): HTMLElement {
        var container = RaptorUiUtil.CreateDom("div", "rsys_settings_goption_boolean").AddClass("rsys_settings_goption_base") as HTMLElement as IRaptorBooleanGenericOptionContainer;
        container._xraptor_boolean_option_true = this.HelperCreateBox(container, true, this.trueText);
        container._xraptor_boolean_option_false = this.HelperCreateBox(container, false, this.falseText);
        return container;
    }

    protected ValueChanged(input: HTMLElement, value: boolean): void {
        var option = input as IRaptorBooleanGenericOptionContainer;
        if (value) {
            option._xraptor_boolean_option_true.classList.add("rsys_settings_goption_boolean_checked");
            option._xraptor_boolean_option_false.classList.remove("rsys_settings_goption_boolean_checked");
        } else {
            option._xraptor_boolean_option_true.classList.remove("rsys_settings_goption_boolean_checked");
            option._xraptor_boolean_option_false.classList.add("rsys_settings_goption_boolean_checked");
        }
    }

    private HelperCreateBox(container: HTMLElement, value: boolean, text: string): HTMLElement {
        var option = RaptorUiUtil.CreateDom("div", null, container);
        option.innerText = text;
        option.addEventListener("click", () => {
            this.SetValue(value);
        });
        return option;
    }

}

interface IRaptorBooleanGenericOptionContainer extends HTMLElement {

    _xraptor_boolean_option_true: HTMLElement;
    _xraptor_boolean_option_false: HTMLElement;

}