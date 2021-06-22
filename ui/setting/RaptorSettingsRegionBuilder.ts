import IRaptorConnection from "../../IRaptorConnection";
import IRaptorConfigurable from "../../misc/IRaptorConfigurable";
import RaptorBooleanGenericOption from "./components/RaptorBooleanGenericOption";
import RaptorFileGenericOption from "./components/RaptorFileGenericOption";
import RaptorNumberGenericOption from "./components/RaptorNumberGenericOption";
import RaptorOptionGenericOption from "./components/RaptorOptionGenericOption";
import RaptorRangeGenericOption from "./components/RaptorRangeGenericOption";
import IRaptorSettingsComponent from "./IRaptorSettingsComponent";
import IRaptorSettingsRegion from "./IRaptorSettingsRegion";
import { RaptorSettingsTab } from "./RaptorSettingsTab";

export default class RaptorSettingsRegionBuilder {

    constructor(name: string, id: string, conn: IRaptorConnection) {
        this.name = name;
        this.id = id;
        this.conn = conn;
    }

    private name: string;
    private id: string;
    private conn: IRaptorConnection;
    private options: IRaptorSettingsComponent[] = [];

    AddOptionNumber(name: string, option: IRaptorConfigurable<number>, min: number, max: number): RaptorSettingsRegionBuilder {
        this.options.push(new RaptorNumberGenericOption(name, option, min, max));
        return this;
    }

    AddOptionRange(name: string, option: IRaptorConfigurable<number>, min: number, max: number): RaptorSettingsRegionBuilder {
        this.options.push(new RaptorRangeGenericOption(name, option, min, max));
        return this;
    }

    AddOptionSelect(name: string, option: IRaptorConfigurable<string>, values: { [displayName: string]: string }): RaptorSettingsRegionBuilder {
        this.options.push(new RaptorOptionGenericOption(name, option, values));
        return this;
    }

    AddOptionBoolean(name: string, option: IRaptorConfigurable<boolean>, trueText: string, falseText: string): RaptorSettingsRegionBuilder {
        this.options.push(new RaptorBooleanGenericOption(name, option, trueText, falseText));
        return this;
    }

    AddOptionFileOpen(name: string, option: IRaptorConfigurable<string>, dialogText: string): RaptorSettingsRegionBuilder {
        this.options.push(new RaptorFileGenericOption(name, option, this.conn, dialogText, false));
        return this;
    }

    AddOptionFileSave(name: string, option: IRaptorConfigurable<string>, dialogText: string): RaptorSettingsRegionBuilder {
        this.options.push(new RaptorFileGenericOption(name, option, this.conn, dialogText, true));
        return this;
    }

    Build(): IRaptorSettingsRegion {
        return {
            name: this.name,
            id: this.id,
            components: this.options
        };
    }

}