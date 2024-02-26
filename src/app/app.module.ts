import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips'; 
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider'; 
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeVideosComponent } from './liste-videos/liste-videos.component';
import { PetitVideoComponent } from './petit-video/petit-video.component';
import { VideoCompletComponent } from './video-complet/video-complet.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { MenuGaucheComponent } from './menu-gauche/menu-gauche.component';
import { FormulaireVideoComponent } from './formulaire-video/formulaire-video.component';
import { DureeVideoFormatPipe } from './duree-video-format.pipe';
import { VuesFormatPipe } from './vues-format.pipe';
import { ScoreSuperiorPipe } from './score-superior.pipe';
import { HttpClientModule } from '@angular/common/http';

import { VideoService } from './video.service';
import { TableVideosComponent } from './table-videos/table-videos.component';
import { EnteteComponent } from './entete/entete.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { CategoriePipe } from './categorie.pipe';



@NgModule({
    declarations: [
        AppComponent,
        ListeVideosComponent,
        PetitVideoComponent,
        VideoCompletComponent,
        UtilisateurComponent,
        MenuGaucheComponent,
        FormulaireVideoComponent,
        DureeVideoFormatPipe,
        VuesFormatPipe,
        ScoreSuperiorPipe,
        TableVideosComponent,
        EnteteComponent,
        AccueilComponent,
        PiedDePageComponent,
        AProposComponent,
        CategoriePipe,
    ],
    providers: [VideoService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        MatBadgeModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSliderModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatTooltipModule,
        HttpClientModule,
        MatTableModule, MatPaginatorModule, MatSortModule,
        MatSnackBarModule,
        MatDialogModule,
    ]
})
export class AppModule { }
