import { Directive, ElementRef, Renderer2, OnInit, Input, Output, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[shadow]'
})
export class CardShadowDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // tslint:disable-next-line:no-input-rename
  @Input('shadow') vimCardShadow = 'lowElevation';

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouse entered');
    this.hover(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouse leave');
    this.hover(false);
  }

  hover(value: boolean) {

    if (value) {
      console.log('vimCardShadow -- ' + this.vimCardShadow);

      if (this.vimCardShadow === 'lowElevation') {
        this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '2px 2px 18px 0 black');
      }
      if (this.vimCardShadow === 'highElevation') {
        this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '4px 4px 18px 0 black');
      }
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
    }

  }
}

