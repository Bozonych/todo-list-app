import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IAppState} from '../../store/state/app.state';
import {selectTaskList} from '../../store/selectors/task.selector';
import {AddTask, RemoveTask, UpdateTask} from '../../store/actions/task.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tasks$ = this._store.pipe(select(selectTaskList));


  constructor(private _store: Store<IAppState>) {
  }

  ngOnInit() {
  }

}
