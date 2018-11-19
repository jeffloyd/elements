import { Component, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {
  @ViewChild('iframe') iframe;

  constructor() {
    this.setIFrameHeight = this.setIFrameHeight.bind(this)
  }

  ngOnInit() {
    window.parent.addEventListener('resize', this.setIFrameHeight);
  }

  ngOnDestroy() {
    window.parent.addEventListener('resize', this.setIFrameHeight);
  }

  setIFrameHeight(): void {
    const iframe = this.iframe && this.iframe.nativeElement;
    const parent = window.parent as any;
    if (iframe) {
      iframe.height = ""
      const doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document
      const height = Math.max( doc.body.scrollHeight, doc.body.offsetHeight )
      iframe.height = height + "px"
      if (parent.setDemoFrameHeight) {
        parent.setDemoFrameHeight()
      }
    }
  }
}
