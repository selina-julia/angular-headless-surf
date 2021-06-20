import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class SurfboardService {
  private api = 'https://api.s1810456034.student.kwmhgb.at';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Array<Location>> {
    return this.http
      .get(`${this.api}/acf/v3/surfboard`)
      .pipe(retry(3))
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
