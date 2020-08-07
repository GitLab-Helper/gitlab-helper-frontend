import { Component, OnInit } from '@angular/core';
import { GroupsService } from '@app/core/services/groups.service';
import { Groups } from '@app/core/interfaces/groups';

@Component({
  selector: 'gitlab-helper-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit {
  public setupComplete = true;
  public groups: Groups;

  constructor(private groupService: GroupsService) {}

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups().subscribe((response: Groups) => {
      this.groups = response;
    });
  }
}
