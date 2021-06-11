import IRaptorConnection from "../IRaptorConnection";
import IRaptorMenu from "../ui/menu/IRaptorMenu";
import RaptorMenuBuilder from "../ui/menu/RaptorMenuBuilder";
import RaptorPanelBuilder from "../ui/panel/RaptorPanelBuilder";

export default class RaptorMenuUtil {

    static ShowErrorMessage(conn: IRaptorConnection, title: string, body: string) {
        return new Promise<void>((resolve) => {
            var menu: IRaptorMenu;
            var content = new RaptorPanelBuilder()
                .AddText(body);
            var dialog = new RaptorMenuBuilder(450, 200)
                .SetTitleNegative(title)
                .SetContent(content.Build())
                .NavBtnAddNeutral("Okay", () => {
                    menu.Close();
                    resolve();
                });
            menu = conn.ShowMenu(dialog);
        });
    }

}