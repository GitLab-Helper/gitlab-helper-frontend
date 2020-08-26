import { Component, OnInit } from '@angular/core';
import { GroupsService } from '@app/core/services/groups.service';
import { Groups } from '@app/core/interfaces/groups';
import { AuthService } from '@app/core/services/auth.service';

/**
 * Board list component
 *
 * @export
 */
@Component({
  selector: 'gitlab-helper-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit {
  /**
   * Groups
   */
  public groups: Groups;
  /**
   * Is setup complete
   */
  public setupComplete = false;
  /**
   * Is settings window open
   */
  public showSettings = false;
  /**
   * Is groups window open
   */
  public showGroups = false;
  /**
   * Is background blur active
   */
  public blurBackground = false;

  /**
   * Creates an instance of BoardListComponent.
   * @param groupService Groups service
   * @param authService Auth service
   */
  constructor(private groupService: GroupsService, private authService: AuthService) {}

  /**
   * @ignore
   */
  ngOnInit() {
    this.setupComplete = this.authService.getRefreshToken() !== '';
    this.getGroups();
  }

  /**
   * Open choose group window
   */
  public showGroupsDropdown() {
    this.setBlur();
    this.showGroups = true;
  }

  /**
   * Close all select window and disable blur
   */
  public closeAllSelect() {
    this.setBlur();
    this.showGroups = false;
  }

  /**
   * Set blur in at background
   */
  private setBlur() {
    this.blurBackground = !this.blurBackground;
  }

  /**
   * Fetch groups
   */
  private getGroups() {
    this.groupService.getGroups().subscribe((response: Groups) => {
      this.groups = response;
    });
  }
}
