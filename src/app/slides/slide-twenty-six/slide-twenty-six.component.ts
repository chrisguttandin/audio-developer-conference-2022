import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'adc-slide-twenty-six',
    styleUrls: ['./slide-twenty-six.component.scss'],
    templateUrl: './slide-twenty-six.component.html'
})
export class SlideTwentySixComponent {}
