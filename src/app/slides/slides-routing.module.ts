import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideEightComponent } from './slide-eight/slide-eight.component';
import { SlideEighteenComponent } from './slide-eighteen/slide-eighteen.component';
import { SlideElevenComponent } from './slide-eleven/slide-eleven.component';
import { SlideFifteenComponent } from './slide-fifteen/slide-fifteen.component';
import { SlideFiveComponent } from './slide-five/slide-five.component';
import { SlideFourComponent } from './slide-four/slide-four.component';
import { SlideFourteenComponent } from './slide-fourteen/slide-fourteen.component';
import { SlideNineComponent } from './slide-nine/slide-nine.component';
import { SlideNineteenComponent } from './slide-nineteen/slide-nineteen.component';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlideSevenComponent } from './slide-seven/slide-seven.component';
import { SlideSeventeenComponent } from './slide-seventeen/slide-seventeen.component';
import { SlideSixComponent } from './slide-six/slide-six.component';
import { SlideSixteenComponent } from './slide-sixteen/slide-sixteen.component';
import { SlideTenComponent } from './slide-ten/slide-ten.component';
import { SlideThirteenComponent } from './slide-thirteen/slide-thirteen.component';
import { SlideThirtyOneComponent } from './slide-thirty-one/slide-thirty-one.component';
import { SlideThirtyTwoComponent } from './slide-thirty-two/slide-thirty-two.component';
import { SlideThirtyComponent } from './slide-thirty/slide-thirty.component';
import { SlideThreeComponent } from './slide-three/slide-three.component';
import { SlideTwelveComponent } from './slide-twelve/slide-twelve.component';
import { SlideTwentyEightComponent } from './slide-twenty-eight/slide-twenty-eight.component';
import { SlideTwentyFiveComponent } from './slide-twenty-five/slide-twenty-five.component';
import { SlideTwentyFourComponent } from './slide-twenty-four/slide-twenty-four.component';
import { SlideTwentyNineComponent } from './slide-twenty-nine/slide-twenty-nine.component';
import { SlideTwentyOneComponent } from './slide-twenty-one/slide-twenty-one.component';
import { SlideTwentySevenComponent } from './slide-twenty-seven/slide-twenty-seven.component';
import { SlideTwentySixComponent } from './slide-twenty-six/slide-twenty-six.component';
import { SlideTwentyThreeComponent } from './slide-twenty-three/slide-twenty-three.component';
import { SlideTwentyTwoComponent } from './slide-twenty-two/slide-twenty-two.component';
import { SlideTwentyComponent } from './slide-twenty/slide-twenty.component';
import { SlideTwoComponent } from './slide-two/slide-two.component';
import { SlidesComponent } from './slides.component';

const routes: Routes = [
    {
        children: [
            {
                component: SlideOneComponent,
                path: '1'
            },
            {
                component: SlideTwoComponent,
                path: '2'
            },
            {
                component: SlideThreeComponent,
                path: '3'
            },
            {
                component: SlideFourComponent,
                path: '4'
            },
            {
                component: SlideFiveComponent,
                path: '5'
            },
            {
                component: SlideSixComponent,
                path: '6'
            },
            {
                component: SlideSevenComponent,
                path: '7'
            },
            {
                component: SlideEightComponent,
                path: '8'
            },
            {
                component: SlideNineComponent,
                path: '9'
            },
            {
                component: SlideTenComponent,
                path: '10'
            },
            {
                component: SlideElevenComponent,
                path: '11'
            },
            {
                component: SlideTwelveComponent,
                path: '12'
            },
            {
                component: SlideThirteenComponent,
                path: '13'
            },
            {
                component: SlideFourteenComponent,
                path: '14'
            },
            {
                component: SlideFifteenComponent,
                path: '15'
            },
            {
                component: SlideSixteenComponent,
                path: '16'
            },
            {
                component: SlideSeventeenComponent,
                path: '17'
            },
            {
                component: SlideEighteenComponent,
                path: '18'
            },
            {
                component: SlideNineteenComponent,
                path: '19'
            },
            {
                component: SlideTwentyComponent,
                path: '20'
            },
            {
                component: SlideTwentyOneComponent,
                path: '21'
            },
            {
                component: SlideTwentyTwoComponent,
                path: '22'
            },
            {
                component: SlideTwentyThreeComponent,
                path: '23'
            },
            {
                component: SlideTwentyFourComponent,
                path: '24'
            },
            {
                component: SlideTwentyFiveComponent,
                path: '25'
            },
            {
                component: SlideTwentySixComponent,
                path: '26'
            },
            {
                component: SlideTwentySevenComponent,
                path: '27'
            },
            {
                component: SlideTwentyEightComponent,
                path: '28'
            },
            {
                component: SlideTwentyNineComponent,
                path: '29'
            },
            {
                component: SlideThirtyComponent,
                path: '30'
            },
            {
                component: SlideThirtyOneComponent,
                path: '31'
            },
            {
                component: SlideThirtyTwoComponent,
                path: '32'
            },
            {
                path: '**',
                redirectTo: '1'
            }
        ],
        component: SlidesComponent,
        path: ''
    }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class SlidesRoutingModule {}
