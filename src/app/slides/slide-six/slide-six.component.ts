import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'adc-slide-six',
    standalone: true,
    styleUrls: ['./slide-six.component.scss'],
    templateUrl: './slide-six.component.html'
})
export class SlideSixComponent {}
