import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'adc-app',
    templateUrl: './app.component.html'
})
export class AppComponent {}
