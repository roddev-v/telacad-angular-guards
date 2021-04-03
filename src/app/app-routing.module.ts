import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AComponent } from "./components/a/a.component";
import { ComponentAGuard } from "./guards/component-a.guard";

const routes: Routes = [
  {
    path: "component-a",
    canActivate: [ComponentAGuard],
    component: AComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
