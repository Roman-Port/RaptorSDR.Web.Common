import RaptorEventDispaptcher from "../RaptorEventDispatcher";

export default interface IRaptorConfigurable<T> {

	GetValue(): T;
	SetValue(value: T): Promise<any>;

	SetAllowed(): boolean;

	OnChanged: RaptorEventDispaptcher<T>;

}