import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { TableVideosComponent } from './table-videos/table-videos.component';
import { VideoCompletComponent } from './video-complet/video-complet.component';
import { AProposComponent } from './a-propos/a-propos.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'table-videos', component: TableVideosComponent},
  { path: 'video/:id', component: VideoCompletComponent},
  { path: 'a-propos', component: AProposComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
