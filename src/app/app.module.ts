import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TreeComponent } from './components/tree/tree.component';
import { OptionsComponent } from './components/options/options.component';
import { SecurityComponent } from './components/security/security.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TreeComponent,
    OptionsComponent,
    SecurityComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
