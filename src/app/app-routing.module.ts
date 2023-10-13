import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {ClassicGamePageComponent} from "./pages/classic-game-page/classic-game-page.component";
import {SpeedrunGamePageComponent} from "./pages/speedrun-game-page/speedrun-game-page.component";
import {PayToWinGamePageComponent} from "./pages/pay-to-win-game-page/pay-to-win-game-page.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'classic',
    component: ClassicGamePageComponent,
  },
  {
    path: 'speedrun',
    component: SpeedrunGamePageComponent,
  },
  {
    path: 'pay-to-win',
    component: PayToWinGamePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
