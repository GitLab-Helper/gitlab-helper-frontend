import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { Auth } from '@app/core/interfaces/auth';

/**
 * Settings component
 *
 * @export
 */
@Component({
  selector: 'gitlab-helper-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  /**
   * GitLab URL
   */
  public gitlabURL = 'https://gitlab.com/';
  /**
   * GitLab token
   */
  public gitlabToken = '';

  /**
   * Creates an instance of SettingsComponent
   * @param authService Auth service
   */
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = this.authService.getAccessToken();
    const parsedToken = JSON.parse(window.atob(token.split('.')[1]));
    this.gitlabURL = parsedToken.sub;
  }

  /**
   * Change current settings of gitlab
   */
  public changeSettings() {
    const authForm = this.createForm(this.gitlabURL, this.gitlabToken);
    this.authService.getToken(authForm).subscribe((response: Auth) => {
      location.reload();
    });
  }

  /**
   * Creates form for settings change
   *
   * @param gitlabURL GitLab URL
   * @param gitlabToken GitLab token
   * @return Form data of gitlab url and token
   */
  private createForm(gitlabURL: string, gitlabToken: string) {
    const formData = new FormData();
    formData.append('app_url', gitlabURL);
    formData.append('api_key', gitlabToken);
    return formData;
  }
}
