
import {Injectable, OnDestroy} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {AngularMaterialThemes} from './ng-mat-theme';


@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy{

  subs: Subscription[] = [];

  private readonly theme: BehaviorSubject<string> = new BehaviorSubject<string>('');
  _lastTheme = '';

  setTheme(theme: string): void { this.theme.next(theme); }

  getTheme(): Observable<string> { return this.theme.asObservable(); }


  get lastTheme(): string { return this._lastTheme; }
  set lastTheme(theme) {this._lastTheme = theme; }

  constructor( private overlay: OverlayContainer) {


    this.subs.push(
      this.getTheme().subscribe( (theme: string | null) => {
        if (theme) {
          if (this.lastTheme) { this.removeLastTheme(); }
          this.lastTheme = theme;
          this.addTheme(theme);
        } else {
          theme = localStorage.getItem('theme');
          if (!theme) { theme = AngularMaterialThemes[0].name; }
          this.setTheme(theme);
        }
      })
    );

  }

  removeLastTheme(): void {
    const themeTitle = `${this.lastTheme}-theme`;
    this.overlay.getContainerElement().classList.remove(themeTitle);
    document.body.classList.remove(themeTitle);
  }

  addTheme(theme: string): void {
    const themeTitle = `${theme}-theme`;
    this.overlay.getContainerElement().classList.add(themeTitle);
    document.body.classList.add(themeTitle);

    localStorage.setItem('theme', theme);
  }



  ngOnDestroy(): void {
    this.subs.forEach( sub =>  sub.unsubscribe());
  }
}
