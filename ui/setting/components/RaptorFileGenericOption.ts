import RaptorUiUtil from "../../../../src/framework/ui/RaptorUiUtil";
import IRaptorConnection from "../../../IRaptorConnection";
import IRaptorConfigurable from "../../../misc/IRaptorConfigurable";
import RaptorBaseGenericOption from "./RaptorBaseGenericOption";

export default class RaptorNumberGenericOption extends RaptorBaseGenericOption<string> {

    constructor(name: string, option: IRaptorConfigurable<string>, conn: IRaptorConnection, dialogTitle: string, saveFile: boolean) {
        super(name, option);
        this.saveFile = saveFile;
        this.dialogTitle = dialogTitle;
        this.conn = conn;
    }

    private saveFile: boolean;
    private dialogTitle: string;
    private conn: IRaptorConnection;

    protected BuildInput(): HTMLElement {
        var btn = RaptorUiUtil.CreateDom("div", "rsys_settings_goption_file").AddClass("rsys_settings_goption_base");
        btn.innerText = "Browse...";
        btn.addEventListener("click", () => {
            //Create dialog
            var dialog: Promise<string>;
            if (this.saveFile)
                dialog = this.conn.CreateFileSaveDialog(this.dialogTitle);
            else
                dialog = this.conn.CreateFileOpenDialog(this.dialogTitle);

            //Show
            dialog.then((path: string) => {
                this.SetValue(path);
            });
        });
        return btn;
    }

    protected ValueChanged(input: HTMLElement, value: string): void {
        
    }

}