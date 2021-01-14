import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LoggerService } from './logger.service';
import { LogLevel } from './log-level.enum';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any): void {
    console.log('error');
    console.log(error);
    if (!(error instanceof Error)) {
      return;
    }
    const loggerService = this.injector.get(LoggerService);
    const message = error.message ? error.message : error.toString();
    loggerService.log(LogLevel.error, message).subscribe();
  }

}
