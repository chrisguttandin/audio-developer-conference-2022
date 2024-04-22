import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'adc-slide-twenty-one',
    standalone: true,
    templateUrl: './slide-twenty-one.component.html'
})
export class SlideTwentyOneComponent {}
