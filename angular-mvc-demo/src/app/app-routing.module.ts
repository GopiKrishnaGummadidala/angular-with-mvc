import { ProductComponent } from "./product/product.component";
import { SampleComponent } from "./sample/sample.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "sample", component: SampleComponent },
  { path: "product", component: ProductComponent },
  { path: "", redirectTo: "sample", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
