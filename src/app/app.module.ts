import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    FooterComponent,
    HeaderComponent,
    NoPageFoundComponent,
    OptionsComponent,
    SecurityComponent,
    TreeComponent
} from './components';

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
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
