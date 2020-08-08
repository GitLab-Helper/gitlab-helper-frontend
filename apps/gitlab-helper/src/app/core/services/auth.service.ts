import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../interfaces/auth';
import { AppConfigService } from './app-config.service';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  public getToken(authForm: FormData): Observable<Auth> {
    return this.http.post<Auth>(`${AppConfigService.config.api}auth/token`, authForm).pipe(
      map((user: any) => {
        this.setAccessToken(user.access_token, user.expires_in);
        this.setRefreshToken(user.refresh_token);
        return user;
      })
    );
  }

  public getAccessToken(): string {
    return this.cookieService.get('accessToken') || '';
  }

  public getRefreshToken(): string {
    return this.cookieService.get('refreshToken') || '';
  }

  public setAccessToken(accessToken: string, expiresInMinutes: number): void {
    const oneDayInXMinutes = 1 / 24 / (60 / expiresInMinutes);
    if (window.location.protocol === 'https:') {
      this.cookieService.set(
        'accessToken',
        accessToken,
        oneDayInXMinutes,
        '/',
        window.location.hostname,
        window.location.protocol === 'https:',
        'None'
      );
    } else {
      this.cookieService.set('accessToken', accessToken, oneDayInXMinutes, '/');
    }
  }

  private setRefreshToken(refreshToken: string): void {
    const oneHourInDay = 1 / 24;
    if (window.location.protocol === 'https:') {
      this.cookieService.set(
        'refreshToken',
        refreshToken,
        oneHourInDay,
        '/',
        window.location.hostname,
        window.location.protocol === 'https:',
        'None'
      );
    } else {
      this.cookieService.set('refreshToken', refreshToken, oneHourInDay, '/');
    }
  }

  private clearCookies(): void {
    this.cookieService.delete('accessToken', '/', window.location.hostname);
    this.cookieService.delete('refreshToken', '/', window.location.hostname);
  }
}
