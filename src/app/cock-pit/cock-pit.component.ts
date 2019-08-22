import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cock-pit',
  templateUrl: './cock-pit.component.html',
  styleUrls: ['./cock-pit.component.css']
})
export class CockPitComponent {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput', { static: false }) serverContentInput: ElementRef;


  // serverName = "";
  // serverContent = "";

  addServer(serverName: HTMLInputElement) {
    this.serverCreated.emit(
      {
        serverName: serverName.value,
        serverContent: this.serverContentInput.nativeElement.value
      }
    )
  }

  addBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit(
      {
        serverName: serverName.value,
        serverContent: this.serverContentInput.nativeElement.value
      }
    )
  }

}
