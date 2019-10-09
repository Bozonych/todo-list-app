import { Action } from '@ngrx/store';

import { ITask } from '../../models/task.interface';

export enum ETaskActions {
  GetTasks = '[Task] Get Tasks',
  GetTasksSuccess = '[Task] Get Tasks Success',
  GetTask = '[Task] Get Task',
  GetTaskSuccess = '[Task] Get Task Success',
  AddTask = '[Task] Add new Task',
  UpdateTask = '[Task] Update Task',
  RemoveTask = '[Task] Remove Task'
}

export class GetTasks implements Action {
  public readonly type = ETaskActions.GetTasks;
}

export class GetTasksSuccess implements Action {
  public readonly type = ETaskActions.GetTasksSuccess;
  constructor(public payload: ITask[]) {}
}

export class GetTask implements Action {
  public readonly type = ETaskActions.GetTask;
  constructor(public payload: number) {}
}

export class GetTaskSuccess implements Action {
  public readonly type = ETaskActions.GetTaskSuccess;
  constructor(public payload: ITask) {}
}

export class AddTask implements Action {
  public readonly type = ETaskActions.AddTask;
  constructor( public  payload: ITask) {}
}

export class UpdateTask implements Action {
  public readonly type = ETaskActions.UpdateTask;
  constructor( public  payload: ITask) {}
}

export class RemoveTask implements Action {
  public readonly type = ETaskActions.RemoveTask;
  constructor( public  payload: number) {}
}

export type TaskActions = GetTasks | GetTasksSuccess | GetTask | GetTaskSuccess | AddTask | UpdateTask | RemoveTask;
