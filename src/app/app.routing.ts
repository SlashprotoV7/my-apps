import { Routes, RouterModule } from '@angular/router';

import { contentComponent } from './content/app.contentComponent';
import { aboutComponent } from './content/about/app.aboutComponent';
import { contactComponent } from './content/contact/app.contactComponent';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: contentComponent },
    { path: 'about', component: aboutComponent },
    { path: 'contact', component: contactComponent },
];

export const routing = RouterModule.forRoot(appRoutes); 