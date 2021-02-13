import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreeComponent } from './components/tree/tree.component';
import { OptionsComponent } from './components/options/options.component';
import { SecurityComponent } from './components/security/security.component';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';

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
