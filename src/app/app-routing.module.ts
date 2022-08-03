import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcFirstThemeComponent } from './calc-first-theme/calc-first-theme.component';
import { CalcSecondThemeComponent } from './calc-second-theme/calc-second-theme.component';
import { CalcThirdThemeComponent } from './calc-third-theme/calc-third-theme.component';

const routes: Routes = [
  {
    path: 'theme-1',
    component: CalcFirstThemeComponent,
    title: 'Calculator - first theme',
  },
  {
    path: 'theme-2',
    component: CalcSecondThemeComponent,
    title: 'Calculator - second theme',
  },
  {
    path: 'theme-3',
    component: CalcThirdThemeComponent,
    title: 'Calculator - third theme',
  },
  { path: '', redirectTo: '/theme-1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
