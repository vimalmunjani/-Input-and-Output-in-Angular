import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[myHidden]'
})
export class HiddenDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    @Input()
    myHidden: boolean;

    ngOnInit() {

        console.log(this.myHidden);

        if (this.myHidden) {
            console.log('hidden');
            this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
        }

    }
}
