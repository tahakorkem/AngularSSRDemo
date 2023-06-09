import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Config} from "../../models/config";
import {BehaviorSubject, catchError, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: BehaviorSubject<Config | null> = new BehaviorSubject<Config | null>(null);

  set config(value: Config) {
    if (this._config.value !== null) {
      throw new Error("Config is already loaded");
    }
    this._config.next(value);
  }

  get config(): Config {
    if (this._config.value === null) {
      throw new Error("Config is not loaded yet");
    }
    return this._config.value;
  }

  constructor(private http: HttpClient) {
  }

  loadConfig(): Observable<Config | undefined> {
    return this.http
      .get<any>('http://localhost:4200/api/config')
      .pipe(
        map(res => {
          return res.status === 'success' ? res.data as Config : undefined
        }),
        catchError(err => {
          console.log(err)
          return of(undefined)
        })
      )
      .pipe(
        tap(c => {
          if (!c) {
            throw new Error("Config is not loaded")
          }
          this.config = c
        })
      )
  }
}
