import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gitlab-helper-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
  @Input() issueDetails: any;
  @Output() closeWindowEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  closeWindow() {
    this.closeWindowEmitter.emit('');
  }
}
