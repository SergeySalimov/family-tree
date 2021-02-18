import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageFoundComponent, OptionsComponent, SecurityComponent, TreeComponent } from './ui/components';

const routes: Routes = [
    { path: '', redirectTo: '/tree', pathMatch: 'full' },
    { path: 'tree', component: TreeComponent },
    { path: 'options', component: OptionsComponent },
    { path: 'security', component: SecurityComponent },
    { path: '**', component: NoPageFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
