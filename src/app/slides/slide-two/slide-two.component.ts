import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./slide-two.component.css'],
    templateUrl: './slide-two.component.html'
})
export class SlideTwoComponent {}
