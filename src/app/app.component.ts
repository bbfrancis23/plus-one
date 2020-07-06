import { Component, } from '@angular/core';
import { ThemeService } from './material-theme/ng-mat-theme.service';
import { AngularMaterialThemes } from './material-theme/ng-mat-theme';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  themes = AngularMaterialThemes;
  constructor( public themeService: ThemeService ) {}


}
