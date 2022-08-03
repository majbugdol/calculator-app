import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcFirstThemeComponent } from './calc-first-theme/calc-first-theme.component';
import { CalcSecondThemeComponent } from './calc-second-theme/calc-second-theme.component';

@NgModule({
  declarations: [AppComponent, CalcFirstThemeComponent, CalcSecondThemeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
