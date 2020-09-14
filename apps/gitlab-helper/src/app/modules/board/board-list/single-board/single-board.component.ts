import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Group } from '@app/core/interfaces/group';
import { SingleBoard } from '@app/core/interfaces/single-board';
import { GroupsService } from '@app/core/services/groups.service';
import { Assignee } from '@app/core/interfaces/assignee';
import { take } from 'rxjs/operators';

@Component({
  selector: 'gitlab-helper-single-board',
  templateUrl: './single-board.component.html',
  styleUrls: ['./single-board.component.scss'],
})
export class SingleBoardComponent implements OnInit, OnChanges {
  @Input() public currentGroup: Group;
  @Input() public singleBoard: SingleBoard;
  @Input() public assignee: Assignee;
  public issues: any[];
  public issue: any;
  public showDetails = false;
  private previousAssignee: Assignee;

  constructor(private groupsService: GroupsService) {}

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.groupsService.getIssues(this.currentGroup.id, this.singleBoard.label.name).subscribe((response: any) => {
      this.issues = response;
    });
  }

  getIssuesByAssignee(assignee: Assignee) {
    this.groupsService
      .getIssues(this.currentGroup.id, this.singleBoard.label.name, assignee.id)
      .pipe(take(1))
      .subscribe((response: any) => {
        this.issues = response;
      });
  }

  showDetailsOfIssue(issue: any) {
    this.issue = issue;
    this.showDetails = true;
  }

  public closeDetailsWindow() {
    this.showDetails = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.assignee !== undefined && this.assignee !== this.previousAssignee) {
      this.getIssuesByAssignee(this.assignee);
      this.previousAssignee = this.assignee;
    }
  }

  closeOnClick() {
    this.showDetails = false;
  }
}
