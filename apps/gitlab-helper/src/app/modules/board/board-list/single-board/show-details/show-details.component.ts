import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gitlab-helper-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  @Input() issueDetails: any;

  constructor() {}

  ngOnInit() {}
}
