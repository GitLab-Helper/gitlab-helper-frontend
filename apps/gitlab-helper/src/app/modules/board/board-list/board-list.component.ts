import { Component, OnInit } from '@angular/core';
import { GroupsService } from '@app/core/services/groups.service';
import { Groups } from '@app/core/interfaces/groups';
import { AuthService } from '@app/core/services/auth.service';

@Component({
  selector: 'gitlab-helper-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss'],
})
export class BoardListComponent implements OnInit {
  public setupComplete = false;
  public groups: Groups;

  constructor(private groupService: GroupsService, private authService: AuthService) {}

  ngOnInit() {
    this.setupComplete = this.authService.getRefreshToken() !== '';
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups().subscribe((response: Groups) => {
      this.groups = response;
    });
  }
}
