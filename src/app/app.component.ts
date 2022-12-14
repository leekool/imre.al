import { AfterContentChecked, Component, QueryList, ViewChildren } from '@angular/core';
import { WindowComponent } from './window/window.component';
import { WindowService } from './window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked {

  constructor(public windowService: WindowService) { }

  @ViewChildren(WindowComponent) windows: QueryList<WindowComponent>;

  ngAfterContentChecked(): void {
    this.windowService.windows = this.windows;
    this.windowService.updateWindows$.subscribe(this.windowService.windows$);
  }
}
