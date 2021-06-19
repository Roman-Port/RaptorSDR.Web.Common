import IRaptorConfigurable from "../../misc/IRaptorConfigurable";
import IRaptorDataProvider from "../IRaptorDataProvider";

export default interface IRaptorPrimitiveDataProvider<T> extends IRaptorDataProvider, IRaptorConfigurable<T> {

}