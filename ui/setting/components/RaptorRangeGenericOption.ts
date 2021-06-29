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

    protected BuildInput(parent: HTMLElement): IRaptorRangeGenericOption_Context {
        var input = RaptorUiUtil.CreateDom("input", "rsys_settings_goption_input", parent).AddClass("rsys_settings_goption_base").AddClass("rsys_settings_goption_range") as HTMLElement as HTMLInputElement;
        input.type = "range";
        input.max = this.max.toString();
        input.min = this.min.toString();
        input.addEventListener("input", () => {
            this.SetValue(parseFloat(input.value));
        });
        return {
            helper: RaptorUiUtil.CreateDom("div", "rsys_settings_goption_range_helper", parent),
            input: input
        };
    }

    protected ValueChanged(input: IRaptorRangeGenericOption_Context, value: number): void {
        input.input.value = value == null ? null : value.toString();
        input.helper.innerText = value == null ? null : value.toString();
    }

}

interface IRaptorRangeGenericOption_Context {
    input: HTMLInputElement;
    helper: HTMLElement;
}