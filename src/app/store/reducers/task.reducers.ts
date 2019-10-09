import {ETaskActions} from './../actions/task.actions';
import {TaskActions} from '../actions/task.actions';
import {initialTaskState, ITaskState} from '../state/task.state';

export const TaskReducers = (
  state = initialTaskState,
  action: TaskActions
): ITaskState => {
  switch (action.type) {
    case ETaskActions.GetTasksSuccess: {
      return {
        ...state,
        tasks: action.payload
      };
    }
    case ETaskActions.GetTaskSuccess: {
      return {
        ...state,
        selectedTask: action.payload
      };
    }
    case ETaskActions.AddTask: {
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    }
    case ETaskActions.RemoveTask: {
      return {
        ...state,
        tasks: [...state.tasks.filter( task => task.id !== action.payload)]
      };
    }
    case ETaskActions.UpdateTask: {

      return {
        ...state,
        tasks: [...state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return  action.payload;
          } else {
            return task;
          }
        })]
      };
    }

    default:
      return state;
  }
};
