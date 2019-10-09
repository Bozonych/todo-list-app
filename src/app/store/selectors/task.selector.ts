

import { createSelector } from '@ngrx/store';
import {ITaskState} from '../state/task.state';
import { IAppState} from '../state/app.state';

const selectTasks = (state: IAppState) => state.tasks;

export const selectTaskList = createSelector(
  selectTasks,
  (state: ITaskState) => state.tasks
);

export const selectSelectedTask = createSelector(
  selectTasks,
  (state: ITaskState) => state.selectedTask
);
