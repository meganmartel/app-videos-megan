import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeVideosComponent } from './liste-videos/liste-videos.component';
import { PetitVideoComponent } from './petit-video/petit-video.component';
import { VideoCompletComponent } from './video-complet/video-complet.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeVideosComponent,
    PetitVideoComponent,
    VideoCompletComponent,
    UtilisateurComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
