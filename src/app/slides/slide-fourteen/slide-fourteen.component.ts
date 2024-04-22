import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'adc-slide-fourteen',
    standalone: true,
    styleUrls: ['./slide-fourteen.component.scss'],
    templateUrl: './slide-fourteen.component.html'
})
export class SlideFourteenComponent {}
