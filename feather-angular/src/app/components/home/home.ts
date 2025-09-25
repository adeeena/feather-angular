import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FeatherIconDirective } from '../../directives/feather-icon-directive.directive';

@Component({
  selector: 'app-home',
  imports: [FeatherIconDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  private intervalId?: number;

  icons: string[] = ['battery', 'sunrise', 'moon', 'activity', 'bell', 'box', 'flag'];
  index: number = 0;
  icon = signal(this.icons[this.index]);

  ngOnInit(): void {
    this.intervalId = window.setInterval(() => {
      this.index++;

      if (this.index >= this.icons.length) {
        this.index = 0;
      }

      this.icon.set(this.icons[this.index]);
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
