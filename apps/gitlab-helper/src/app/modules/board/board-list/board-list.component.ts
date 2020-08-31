import { Component, OnInit } from '@angular/core';
import { GroupsService } from '@app/core/services/groups.service';
import { AuthService } from '@app/core/services/auth.service';
import { Group } from '@app/core/interfaces/group';
import { Board } from '@app/core/interfaces/board';
import { Assignee } from '@app/core/interfaces/assignee';

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
  public groups: Group[];
  /**
   * Boards
   */
  public boards: Board[];
  /**
   * Assignees
   */
  public assignees: Assignee[];
  public labels: any[];
  /**
   * Is background blur active
   */
  public blurBackground = false;
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
   * Is boards window open
   */
  public showBoards = false;
  /**
   * Is assignees window open
   */
  public showAssignees = false;
  /**
   * Show issues check
   */
  public showIssues = false;
  /**
   * Currently choosen group
   */
  public currentGroup: Group;
  /**
   * Currently choosen group
   */
  public currentBoard: Board;
  /**
   * Currently choosen assignee
   */
  public currentAssignee: Assignee;

  /**
   * Creates an instance of BoardListComponent.
   * @param groupService Groups service
   * @param authService Auth service
   */
  constructor(private groupService: GroupsService, private authService: AuthService) {}

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.setupComplete = this.authService.getRefreshToken() !== '';
    // this.initForDeployment();
    this.getGroups();
  }

  public getLabelsForGroup(id: any) {
    this.groupService.getLabelsByGroup(id).subscribe((response: any) => {
      this.labels = response;
    });
  }

  /**
   * Open choose group window
   */
  public showGroupsDropdown(): void {
    this.setBlur();
    this.showGroups = true;
  }

  /**
   * Open choose board window
   */
  public showBoardsDropdown(): void {
    if (this.boards) {
      this.setBlur();
      this.showBoards = true;
    }
  }

  /**
   * Open choose asignee window
   */
  public showAsigneesDropdown(): void {
    this.setBlur();
    this.showAssignees = true;
  }

  /**
   * Close all select window and disable blur
   */
  public closeAllSelect(): void {
    this.setBlur();
    this.showGroups = false;
    this.showBoards = false;
    this.showAssignees = false;
  }

  /**
   * Fetch group details from API
   * @param eventGroup Event group
   */
  public getGroup(eventGroup: Group): void {
    this.currentGroup = eventGroup;
    this.groupService.getBoardsByGroupId(eventGroup.id).subscribe((response: Board[]) => {
      this.boards = response;
      this.closeAllSelect();
    });
  }

  /**
   * Fetch issues and labels from current board
   * @param eventBoard Event board
   */
  public getIssuesAndAssignees(eventBoard: Board): void {
    this.currentBoard = eventBoard;
    this.groupService.getAssigneesByGroup(this.currentGroup.id).subscribe((response: Assignee[]) => {
      this.assignees = response;
      // console.log('assignees: ', this.assignees);
      this.showIssues = true;
      this.closeAllSelect();
    });
  }

  /**
   * Fetch filtered issues based on assignee
   * @param eventAssignee Event assignee
   */
  public getIssuesByAssignee(eventAssignee: Assignee): void {
    this.currentAssignee = eventAssignee;
    this.closeAllSelect();
  }

  /**
   * Fetch groups
   */
  private getGroups(): void {
    this.groupService.getGroups().subscribe((response: Group[]) => {
      this.groups = response;
    });
  }

  /**
   * Set blur in at background
   */
  private setBlur(): void {
    this.blurBackground = !this.blurBackground;
  }
}
