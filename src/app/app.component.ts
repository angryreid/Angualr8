import {
  Component,
  ApplicationRef,
  ComponentFactoryResolver,
  AfterViewInit,
  OnDestroy,
  ComponentRef,
  ElementRef,
  Injector,
} from '@angular/core';
import { DlHostDirective } from './dl-host.directive';
import { AComponent } from './a/a.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  component: ComponentRef<AComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private elementRef: ElementRef,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {
    this.component = this.componentFactoryResolver
      .resolveComponentFactory(AComponent)
      .create(this.injector);
    this.appRef.attachView(this.component.hostView);
    // third change.
    (<AComponent>this.component.instance).onTitleChange.subscribe(()=>{
      console.log('title changed!')
    });
    (<AComponent>this.component.instance).title = 'a works again!(from App)'
  }
  ngOnDestroy(): void {
    this.appRef.detachView(this.component.hostView);
    this.component.destroy();
  }

  ngAfterViewInit(): void {
    let host = document.createElement('div');
    host.appendChild((this.component.hostView as any).rootNodes[0]);
    this.elementRef.nativeElement.appendChild(host);
  }
}
