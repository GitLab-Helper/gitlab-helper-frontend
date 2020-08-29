import { Component, OnInit } from '@angular/core';
import { Group } from '@app/core/interfaces/group';

@Component({
  selector: 'gitlab-helper-single-board',
  templateUrl: './single-board.component.html',
  styleUrls: ['./single-board.component.scss'],
})
export class SingleBoardComponent implements OnInit {
  public currentGroup: Group;

  constructor() {}

  ngOnInit() {}
}
