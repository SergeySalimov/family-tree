import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    FooterComponent,
    HeaderComponent,
    NoPageFoundComponent,
    OptionsComponent,
    SecurityComponent,
    TreeComponent
} from './components';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        NoPageFoundComponent,
        OptionsComponent,
        SecurityComponent,
        TreeComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule.forChild([])
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        NoPageFoundComponent,
        OptionsComponent,
        SecurityComponent,
        TreeComponent,
        RouterModule,
    ],
})
export class UIModule {
}
