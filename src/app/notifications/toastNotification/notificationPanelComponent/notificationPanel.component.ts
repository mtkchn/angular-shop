import {
	Component,
	ViewContainerRef,
	ViewChild,
	ComponentRef,
	ViewEncapsulation
} from "@angular/core";
import { Subscription } from "rxjs";
import { NotificationBase } from "../../notificationBase";
@Component({
	selector: 'notification-panel',
	template: `
<div class="notification-panel">
	<div #notifications></div>
</div>
						`,
	styleUrls: ['./notificationPanel.style.css'],
	encapsulation: ViewEncapsulation.Emulated
})
export class NotificationPanelComponent {
	@ViewChild('notifications', { read: ViewContainerRef }) notificationBlock: ViewContainerRef;

	public showNotification<T extends NotificationBase>(componentRef: ComponentRef<T>, timeOut: number) {
		console.log('TIME OUT : ', timeOut)
		const toast = componentRef;
		this.notificationBlock.insert(toast.hostView);
		let subscription = toast.instance.getClosedEvent()
			.subscribe(() => {
				this.destroyComponent(toast, subscription);
			});
		setTimeout(() => {
			toast.instance.close();
		}, timeOut);
	}

	private destroyComponent<T extends NotificationBase>(componentRef: ComponentRef<T>, subscription: Subscription) {
		componentRef.destroy();
		subscription.unsubscribe();
	}
}