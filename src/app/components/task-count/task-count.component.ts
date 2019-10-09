import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectTaskList} from '../../store/selectors/task.selector';
import {IAppState} from '../../store/state/app.state';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrls: ['./task-count.component.scss']
})
export class TaskCountComponent implements OnInit {
  tasks$ = this._store.pipe(select(selectTaskList));


  constructor(private _store: Store<IAppState>) { }

  ngOnInit() {
  }

}
