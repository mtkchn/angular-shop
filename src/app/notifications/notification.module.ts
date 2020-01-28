import { NgModule } from '@angular/core';
import { NotificationManager } from './notification.manager';
import { TinyNotificationComponent } from './toastNotification/tinyNotificationComponent/tinyNotification.component';
import { NotificationPanelComponent } from './toastNotification/notificationPanelComponent/notificationPanel.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
	declarations: [TinyNotificationComponent, NotificationPanelComponent],
	entryComponents: [TinyNotificationComponent, NotificationPanelComponent],
	providers: [NotificationManager],
	imports: [
		MaterialModule
	]
})
export class NotificationModule {

}
