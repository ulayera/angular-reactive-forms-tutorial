import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NonReactiveFormComponent } from './non-reactive-form/non-reactive-form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';


const routes: Routes = [
  { path: 'non-reactive-form', component: NonReactiveFormComponent },
  { path: 'form-control', component: FormControlComponent },
  { path: 'form-group', component: FormGroupComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'form-array', component: FormArrayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
