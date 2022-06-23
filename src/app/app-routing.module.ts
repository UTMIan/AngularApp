import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import { NewsComponent } from './pages/news/news.component';

const routes: Routes = [
  {path: "news", component: NewsComponent},
  {path: "cards", component: CardRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
