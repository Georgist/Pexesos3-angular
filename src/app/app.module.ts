import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassicGamePageComponent } from './pages/classic-game-page/classic-game-page.component';
import { SpeedrunGamePageComponent } from './pages/speedrun-game-page/speedrun-game-page.component';
import { PayToWinGamePageComponent } from './pages/pay-to-win-game-page/pay-to-win-game-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { GameInfoPanelComponent } from './components/game-info-panel/game-info-panel.component';
import { TipInfoPanelComponent } from './components/tip-info-panel/tip-info-panel.component';
import { ModalComponent } from './components/modal/modal.component';
import { TestComponent } from './components/test/test.component';
import { HellfirePageComponent } from './pages/hellfire-page/hellfire-page.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ClassicGamePageComponent,
    SpeedrunGamePageComponent,
    PayToWinGamePageComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    TilesComponent,
    GameInfoPanelComponent,
    TipInfoPanelComponent,
    ModalComponent,
    TestComponent,
    HellfirePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
