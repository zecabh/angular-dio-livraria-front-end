import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Produto} from "./model/Produto";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


@Injectable()


export class BooksService {

  private url = 'https://localhost:44364/api/livraria';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor(private http: HttpClient){}
    
    getBooks() {
      return this.http.get(this.url)        
    }

}
