import {ITask} from '../../models/task.interface';

export interface ITaskState {
  tasks: ITask[];
  selectedTask: ITask;
}

export const initialTaskState: ITaskState = {
  tasks: [
    {
      id: 0,
      title: ' My first Task',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare magna vitae est tempor pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti. Sed tincidunt ex ipsum, in tristique libero convallis a. Sed convallis massa quis aliquam tempor. Nullam orci dui, facilisis quis nibh vitae, egestas commodo sem. Nullam pharetra faucibus justo quis posuere. Proin eget porta dui. Etiam neque mi, gravida et dictum sit amet, rutrum non diam. Morbi feugiat consectetur felis vitae egestas.',
      dateEnd: null
    },
    {
      id: 1,
      title: ' My second Task',
      description: 'Nunc nulla nisi, pellentesque id erat in, pellentesque pharetra libero. Curabitur convallis rutrum pharetra. Aliquam eleifend eleifend nibh, quis dapibus dolor tempus quis. Mauris dapibus massa id arcu egestas, in rhoncus ex vehicula. Integer vitae lacinia lacus. In consequat mi justo, at molestie felis lobortis vitae. Duis vulputate laoreet tortor vitae consequat. Phasellus ut faucibus elit, eget fermentum nisi. Nullam tempor, massa maximus varius porttitor, urna felis rutrum enim, eget eleifend est leo ut dolor. Etiam et vehicula nisl. Nullam sit amet turpis turpis. Nulla facilisi. Vestibulum porta condimentum libero, nec aliquet justo consequat in. Morbi et elementum nisi.',
      dateEnd: null
    },
    {
      id: 2,
      title: ' My third Task',
      description: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean aliquam metus vel felis maximus semper. Duis dui nisi, faucibus id hendrerit a, semper at velit. Phasellus sed mi non neque sagittis varius. Praesent efficitur vulputate nibh tristique pretium. Vestibulum elementum a augue ac malesuada. Aenean rhoncus turpis ut dictum dignissim.',
      dateEnd: null
    },
    {
      id: 3,
      title: ' My fourth Task',
      description: 'Donec sodales, ex vel congue sollicitudin, libero nisi varius augue, posuere venenatis leo mauris at velit. Cras consectetur maximus dolor. Pellentesque tristique tortor id massa faucibus, vel iaculis eros rhoncus. In venenatis est nec elit tempor vestibulum nec eu eros. Nam sed orci ut lacus posuere luctus ut non enim. Suspendisse potenti. Nam porttitor iaculis turpis nec pretium. Duis tempor tempus nisi quis suscipit. Etiam tellus neque, efficitur quis scelerisque non, euismod eget mauris.',
      dateEnd: null
    }
  ],
  selectedTask: null
};
