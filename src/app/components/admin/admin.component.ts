import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {selectTaskList} from '../../store/selectors/task.selector';
import {IAppState} from '../../store/state/app.state';
import {AddTask, RemoveTask, UpdateTask} from '../../store/actions/task.actions';
import {MatDialog} from '@angular/material';
import {ITask} from '../../models/task.interface';
import {TaskModalComponent} from '../task-modal/task-modal.component';
import {dispatch} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  tasks$ = this._store.pipe(select(selectTaskList));


  constructor(private _store: Store<IAppState>, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  removeTask(taskId: number) {
    this._store.dispatch(new RemoveTask(taskId));
  }

  addNewTask() {
    this.openNewTaskDialog({
      dateEnd: null,
      description: null,
      id: new Date().getTime(),
      title: null
    });
  }

  editTask(task: ITask) {
    this._store.dispatch(new UpdateTask(task));

  }

  saveNewTask(task: ITask) {
    this._store.dispatch(new AddTask(task));
  }

  openNewTaskDialog(task: ITask): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '550px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.saveNewTask(result);
      }
    });
  }

  openEditTaskDialog(task: ITask): void {
    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '550px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.editTask(result);
      }
    });
  }
}
