import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'adc-slide-sixteen',
    standalone: true,
    styleUrls: ['./slide-sixteen.component.scss'],
    templateUrl: './slide-sixteen.component.html'
})
export class SlideSixteenComponent {}
