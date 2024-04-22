import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'adc-slide-two',
    standalone: true,
    styleUrls: ['./slide-two.component.scss'],
    templateUrl: './slide-two.component.html'
})
export class SlideTwoComponent {}
