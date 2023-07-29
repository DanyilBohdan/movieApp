import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../services/storage.service";
import {BehaviorSubject, Subject} from "rxjs";

@Component({
  selector: 'app-toggle-theme',
  templateUrl: './toggle-theme.component.html',
  styleUrls: ['./toggle-theme.component.scss'],
})
export class ToggleThemeComponent implements OnInit {

  private COLOR_THEME: string = 'color-theme';

  public currentColorTheme: Subject<string> = new BehaviorSubject('light');

  public isDark: boolean = false;

  constructor(private storageService: StorageService) {
    this.currentColorTheme.subscribe(colorTheme => {
      document.body.setAttribute(this.COLOR_THEME, colorTheme);
      this.storageService.saveValue(this.COLOR_THEME, colorTheme);
      this.isDark = colorTheme == 'dark';
    });
    storageService.getValue(this.COLOR_THEME).then(colorTheme => {
      if (colorTheme) {
        this.currentColorTheme.next(colorTheme);
      }
    });
  }

  ngOnInit() {}


  public changeThem(event: Event) {
    const customEvent = event as CustomEvent;
    let colorTheme = customEvent.detail.checked ? 'dark' : 'light';
    this.currentColorTheme.next(colorTheme);
  }

}
