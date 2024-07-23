import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map, catchError, throwError } from 'rxjs';
import { RandomNum } from '../models/random-num.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RandomNumService {
  private readonly API_URL = `${environment.API_URL}/integer?count=1`;
  private readonly http = inject(HttpClient);

  public getRandomNum(): Observable<number> {
    return this.http.get<RandomNum>(this.API_URL).pipe(
      map(data => data.items[0]),
      catchError(err => throwError(() => err.error))
    );
  }
}
