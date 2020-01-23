import {
	Component,
	ViewEncapsulation
} from "@angular/core";
import { NotificationBase } from "../../notificationBase";
@Component({
	selector: 'tiny-notification',
	templateUrl: './tinyNotification.template.html',
	styleUrls: ['./tinyNotification.style.css'],
	encapsulation: ViewEncapsulation.Emulated
})
export class TinyNotificationComponent extends NotificationBase {
	public header: string;
	public description: string;

	close() {
		this.closedEvent.next();
		this.closedEvent.complete();
	}


}