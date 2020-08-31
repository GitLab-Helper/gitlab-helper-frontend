import { Component, OnInit, Input } from '@angular/core';
import { Group } from '@app/core/interfaces/group';
import { SingleBoard } from '@app/core/interfaces/single-board';
import { GroupsService } from '@app/core/services/groups.service';

@Component({
  selector: 'gitlab-helper-single-board',
  templateUrl: './single-board.component.html',
  styleUrls: ['./single-board.component.scss'],
})
export class SingleBoardComponent implements OnInit {
  @Input() public currentGroup: Group;
  @Input() public singleBoard: SingleBoard;
  public issues: any[];

  constructor(private groupsService: GroupsService) {}

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.groupsService.getIssues(this.currentGroup.id, this.singleBoard.label.name).subscribe((response: any) => {
      this.issues = response;
    });
  }
}
