import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: any[] = [
    { type: "server", title: "test server", content: "test server content" }
  ];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    if (serverData)
      this.serverElements.push({
        type: "server",
        title: serverData.serverName,
        content: serverData.serverContent
      });
  }
  onBlueprintCreated(blueprintData: { serverName: string, serverContent: string }) {
    if (blueprintData)
      this.serverElements.push({
        type: "blueprint",
        title: blueprintData.serverName,
        content: blueprintData.serverContent
      });
  }
  changeFirst() {
    this.serverElements[0].title = "Changed....!"
  }

  destroy() {
    this.serverElements.splice(0, 1)
  }

}
