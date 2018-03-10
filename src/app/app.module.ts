import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ImageapiService } from './services/imageapi.service';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SquadService} from './services/squad.service';
import { AboutComponent } from './components/about/about.component';

const myRoutes: Routes = [
{path: '', component: UserComponent},
{path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [SquadService, ImageapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
