import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


import { LogLevel } from './log-level.enum';

@Injectable()
export class LoggerService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  log(level: LogLevel, message: String): Observable<void> {
    return this.httpClient.put<void>('/rest/log/' + level, message);
  }

}
