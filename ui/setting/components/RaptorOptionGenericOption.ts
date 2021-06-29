import IRaptorConfigurable from "../../../misc/IRaptorConfigurable";
import RaptorUiUtil from "../../../util/RaptorUiUtil";
import RaptorBaseGenericOption from "./RaptorBaseGenericOption";

export default class RaptorOptionGenericOption extends RaptorBaseGenericOption<string> {

    constructor(name: string, option: IRaptorConfigurable<string>, values: { [displayName: string]: string }) {
        super(name, option);
        this.values = values;
    }

    private values: { [displayName: string]: string };

    protected BuildInput(parent: HTMLElement): HTMLElement {
        var input = RaptorUiUtil.CreateDom("select", "rsys_settings_goption_input", parent).AddClass("rsys_settings_goption_base") as HTMLElement as HTMLSelectElement;
        var keys = Object.keys(this.values);
        for (var i = 0; i < keys.length; i++) {
            var option = RaptorUiUtil.CreateDom("option", null, input) as HTMLElement as HTMLOptionElement;
            option.innerText = keys[i];
            option.value = this.values[keys[i]];
        }
        input.addEventListener("change", () => {
            this.SetValue(input.value);
        });
        return input;
    }

    protected ValueChanged(input: HTMLElement, value: string): void {
        (input as HTMLSelectElement).value = value;
    }

}