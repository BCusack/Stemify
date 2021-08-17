import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MatcomModule } from '../matcom/matcom.module';
import { SubListComponent } from './sub-list/sub-list.component';
import { ArticleComponent } from './article/article.component';


export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'subs/:id', component: SubListComponent },
  { path: 'article/:id', component: ArticleComponent }
]

@NgModule({
  declarations: [
    DashboardComponent,

    SubListComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    MatcomModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashModule { }
