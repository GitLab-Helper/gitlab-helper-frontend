import { Component } from '@angular/core';
import { AuthService } from '@app/core/services/auth.service';
import { Auth } from '@app/core/interfaces/auth';

@Component({
  selector: 'gitlab-helper-setup-window',
  templateUrl: './setup-window.component.html',
  styleUrls: ['./setup-window.component.scss'],
})
export class SetupWindowComponent {
  public gitlabURL = '';
  public gitlabToken = '';

  constructor(private authService: AuthService) {}

  public getAuthorization() {
    const authForm: FormData = this.createForm(this.gitlabURL, this.gitlabToken);
    this.authService.getToken(authForm).subscribe((response: Auth) => {
      location.reload();
    });
  }

  private createForm(gitlabURL: string, gitlabToken: string) {
    const formData = new FormData();
    formData.append('app_url', gitlabURL);
    formData.append('api_key', gitlabToken);
    return formData;
  }
}
