import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('srvElement') element: { type: string, title: string, content: string };

  @Input() title: string;

  @ViewChild("heading", { static: false }) header: ElementRef;

  @ContentChild("cardBody", { static: false }) cardBody: ElementRef;

  constructor() {
    console.log("constructor was called");

  }

  ngOnInit() {
    console.log("NgOnInit was called");
  };

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("ngOnChanges Called...!");
  }
  ngDoCheck() {
    console.log("ngDoChecked was called...!");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit was called");
    console.log("The content of the card body************" + this.cardBody.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked was called");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit was called....!");
    console.log("text was ****************" + this.header.nativeElement.textContent);
  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked was called...!")
  }
  ngOnDestroy() {
    console.log("OnDestroy was called....!")
  }

}
