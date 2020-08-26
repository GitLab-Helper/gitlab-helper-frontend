import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Select window component
 * @export
 */
@Component({
  selector: 'gitlab-helper-select-window',
  templateUrl: './select-window.component.html',
  styleUrls: ['./select-window.component.scss'],
})
export class SelectWindowComponent implements OnInit {
  /**
   * Title of window
   */
  @Input() title;
  /**
   * List of initial values
   */
  @Input() listOfElements: any;
  /**
   * Default settings trigger event emitter
   */
  @Output() defaultSettingsButtonEventEmitter: EventEmitter<any> = new EventEmitter();
  /**
   * Event emitter for choosen subject
   */
  @Output() choosenSubjectEventEmitter: EventEmitter<any> = new EventEmitter();

  /**
   * Creates an instance of SelectWindowComponent.
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit() {}
}
