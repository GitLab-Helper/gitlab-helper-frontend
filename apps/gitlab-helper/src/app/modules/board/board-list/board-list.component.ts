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
   * Is setup complete
   */
  public setupComplete = false;
  /**
   * Groups
   */
  public groups: Groups;
  /**
   * Show settings
   */
  public showSettings = false;

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
   * Fetch groups
   */
  getGroups() {
    this.groupService.getGroups().subscribe((response: Groups) => {
      this.groups = response;
    });
  }
}
