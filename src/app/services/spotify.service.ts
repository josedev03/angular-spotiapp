import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // tslint:disable-next-line: max-line-length
  salt = 'BQCRTxAxhMY08hEtuelbj8tYP9xBkC2hROY6wKel0xRMcnbILqxObBzYfz4drIpXtkZDOLyZUNVqz_4r3vg'
  token = `Bearer ${this.salt}`;

  constructor(private httpCliente: HttpClient) { }

  getQery(query: string){
    const url = `https://api.spotify.com/v1/`;

    const headers = new HttpHeaders({
      Authorization: this.token
    });

    return this.httpCliente.get(`${url}${query}`, {headers});
  }

  getNewReleases(){
    return this.getQery('browse/new-releases?country=SE&limit=20')
      .pipe( map( (data: any) => data.albums.items));
  }

  getArtistas(termino: string){
    return this.getQery(`search?q=${termino}&type=artist`)
    .pipe(map((data: any) => data.artists.items));
  }

  getArtista(id: string){
    return this.getQery(`artists/${id}`);
  }

  getTopTracks(id: string){
    return this.getQery(`artists/${id}/top-tracks?country=es`)
      .pipe(map((data: any) => data.tracks));
  }
}
