import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as feather from 'feather-icons';

@Directive({
  selector: '[data-feather]',
  standalone: true,
})
export class FeatherIconDirective implements OnChanges, OnInit {
  @Input('data-feather') iconName!: string;

  private platformId = inject(PLATFORM_ID);
  private el: ElementRef<HTMLElement> = inject(ElementRef);
  private renderer = inject(Renderer2);
  private svgIcon: SVGElement | undefined;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Create an SVG element once and append it.
      this.svgIcon = this.renderer.createElement('svg', 'http://www.w3.org/2000/svg');
      this.renderer.appendChild(this.el.nativeElement, this.svgIcon);
      this.updateIcon();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // On subsequent changes, just update the existing SVG element.
    if (
      isPlatformBrowser(this.platformId) &&
      this.svgIcon &&
      changes['iconName'] &&
      !changes['iconName'].isFirstChange()
    ) {
      this.updateIcon();
    }
  }

  private updateIcon(): void {
    const icon = (feather.icons as any)[this.iconName];
    if (icon && this.svgIcon) {
      // Update attributes and content of the existing SVG element
      Object.entries(icon.attrs).forEach(([key, value]) => {
        this.renderer.setAttribute(this.svgIcon, key, String(value));
      });
      this.svgIcon.innerHTML = icon.contents;
    } else if (this.svgIcon) {
      // If icon is not found, clear the SVG
      this.svgIcon.innerHTML = '';
    }
  }
}
