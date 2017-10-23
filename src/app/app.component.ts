import { Component } from '@angular/core';
import { headerComponent } from './header/app.headerComponent';
import { footerComponent } from './footer/app.footerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentComponent } from './content/app.contentComponent';
import { aboutComponent } from './content/about/app.aboutComponent';
import { contactComponent } from './content/contact/app.contactComponent';

@Component({
  selector: 'my-app',
  templateUrl: './dasboard.html',
})
export class AppComponent {}
