import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'adc-slide-seven',
    templateUrl: './slide-seven.component.html'
})
export class SlideSevenComponent {}
