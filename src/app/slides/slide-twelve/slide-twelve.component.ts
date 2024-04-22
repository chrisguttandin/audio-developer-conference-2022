import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'adc-slide-twelve',
    standalone: true,
    templateUrl: './slide-twelve.component.html'
})
export class SlideTwelveComponent {}
