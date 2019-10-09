import {Component, Inject, OnInit} from '@angular/core';
import {ITask} from '../../models/task.interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.scss']
})
export class TaskModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ITask) {

  }

  ngOnInit() {
  }

  onNoClickClose(): void {
    this.dialogRef.close();
  }

}
