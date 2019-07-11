import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'all 0.3s';
  }

  @HostListener('mouseenter')
  zoonIn() {
    this.el.nativeElement.style.transform = 'scale(1.1, 1.1)';
  }

  @HostListener('mouseleave')
  zoomOut() {
    this.el.nativeElement.style.transform = 'scale(1.0, 1.0)';
  }
}
