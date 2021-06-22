import IRaptorConfigurable from "../../../misc/IRaptorConfigurable";
import RaptorUiUtil from "../../../util/RaptorUiUtil";
import RaptorBaseGenericOption from "./RaptorBaseGenericOption";

export default class RaptorRangeGenericOption extends RaptorBaseGenericOption<number> {

    constructor(name: string, option: IRaptorConfigurable<number>, min: number, max: number) {
        super(name, option);
        this.min = min;
        this.max = max;
    }

    private min: number;
    private max: number;

    protected BuildInput(): HTMLElement {
        var input = RaptorUiUtil.CreateDom("input", "rsys_settings_goption_input").AddClass("rsys_settings_goption_base") as HTMLElement as HTMLInputElement;
        input.type = "range";
        input.max = this.max.toString();
        input.min = this.min.toString();
        input.addEventListener("change", () => {
            this.SetValue(parseFloat(input.value));
        });
        return input;
    }

    protected ValueChanged(input: HTMLElement, value: number): void {
        (input as HTMLInputElement).value = value == null ? null : value.toString();
    }

}