 import { Component, ViewChild, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { DlHostDirective } from './dl-host.directive';
import { AComponent } from './a/a.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(DlHostDirective) dlHost: DlHostDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver){}
  
  ngAfterViewInit(): void {
    this.dlHost.viewContainerRef.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(AComponent)
    )
  }
}
