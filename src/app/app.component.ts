import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NotificationManager } from './notifications/notification.manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('notificationBlock', { read: ViewContainerRef }) notificationBlock: ViewContainerRef;
  constructor(private notificationManager: NotificationManager) { }

  ngOnInit(): void {
    this.notificationManager.init(this.notificationBlock);
  }
}
