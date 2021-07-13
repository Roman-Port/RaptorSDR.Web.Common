import IRaptorConnection from "../../../IRaptorConnection";
import IRaptorConfigurable from "../../../misc/IRaptorConfigurable";
import RaptorUiUtil from "../../../util/RaptorUiUtil";
import IRaptorSettingsComponent from "../IRaptorSettingsComponent";

export default abstract class RaptorBaseGenericOption<T> implements IRaptorSettingsComponent {

    constructor(name: string, option: IRaptorConfigurable<T>) {
        this.name = name;
        this.option = option;
    }

    private name: string;
    private option: IRaptorConfigurable<T>;

    Build(): HTMLElement {
        //Create root
        var element = RaptorUiUtil.CreateDom("div", "rsys_settings_goption_setting");

        //If it's readonly, apply
        if (this.option.SetAllowed != null && !this.option.SetAllowed())
            element.classList.add("rsys_settings_goption_setting_readonly");

        //Create title
        RaptorUiUtil.CreateDom("div", "rsys_settings_goption_title", element).innerText = this.name;

        //Create main input
        var input = this.BuildInput(element);

        //Bind changed event
        (element as HTMLElement as IRaptorBaseGenericOptionElement<T>)._xraptor_option_evt_handle = (payload: T) => {
            this.ValueChanged(input, payload);
        }
        this.option.OnChanged.Bind((element as HTMLElement as IRaptorBaseGenericOptionElement<T>)._xraptor_option_evt_handle);

        //Update current value
        this.ValueChanged(input, this.option.GetValue());

        return element;
    }

    Destroy(element: HTMLElement): void {
        //Unbind changed event
        this.option.OnChanged.Unbind((element as IRaptorBaseGenericOptionElement<T>)._xraptor_option_evt_handle);

        //Remove
        element.remove();
    }

    protected SetValue(value: T): void {
        this.option.SetValue(value);
    }

    protected abstract BuildInput(parent: HTMLElement): any;
    protected abstract ValueChanged(ctx: any, value: T): void;

}

interface IRaptorBaseGenericOptionElement<T> extends HTMLElement {

    _xraptor_option_evt_handle: (payload: T) => void;

}