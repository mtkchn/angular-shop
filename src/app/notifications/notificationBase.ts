import { Subject } from "rxjs";

export abstract class NotificationBase {
	protected closedEvent = new Subject();

	public getClosedEvent() {
		return this.closedEvent;
	}
	public abstract close(): void;
}