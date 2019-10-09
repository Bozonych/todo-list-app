import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule, MatDialogModule,
  MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './store/reducers/app.reducers';
import { TaskCountComponent } from './components/task-count/task-count.component';
import { TaskModalComponent } from './components/task-modal/task-modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DashboardComponent,
    TaskCountComponent,
    TaskModalComponent
  ],
  imports: [
    StoreModule.forRoot(appReducers),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatBadgeModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatInputModule
  ],
  providers: [MatDatepickerModule],
  entryComponents: [TaskModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
