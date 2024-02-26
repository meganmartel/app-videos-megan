import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Video } from './video';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { Avis } from './avis';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  API_URL = 'http://127.0.0.1/api-videos/';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.API_URL);
  }

  getVideosByCategory(category: string): Observable<Video[]> {
    const params = new HttpParams().set('category', category);
    return this.http.get<Video[]>(this.API_URL, {params});
  }

  getVideo(id: string): Observable<Video> {
    return this.http.get<Video>(`${this.API_URL}/?id=${id}`)
  }

  getAvis(id: string): Observable<Avis[]> {
    return this.http.get<Avis[]>(`${this.API_URL}/avis/?id=${id}`)
  }

  addVideo(video:Video): Observable<void> {
    video.datePublication = formatDate(video.datePublication, 'yyyy-MM-dd', 'en')
    return this.http.post<void>(this.API_URL, video, httpOptions);
  }

  deleteVideo(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/?id=${id}`);
  }

  updateVideo(video: Video): Observable<void> {
    video.datePublication = formatDate(video.datePublication, 'yyyy-MM-dd', 'en')
    return this.http.put<void>(`${this.API_URL}/?id=${video.id}`, video, httpOptions);
  }
}
