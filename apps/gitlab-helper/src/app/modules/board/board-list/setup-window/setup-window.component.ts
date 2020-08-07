import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gitlab-helper-setup-window',
  templateUrl: './setup-window.component.html',
  styleUrls: ['./setup-window.component.scss'],
})
export class SetupWindowComponent implements OnInit {
  gitlabURL = '';

  constructor() {}

  ngOnInit() {}
}
