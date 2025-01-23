import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'adc-slide-twenty-three',
    templateUrl: './slide-twenty-three.component.html'
})
export class SlideTwentyThreeComponent {}
