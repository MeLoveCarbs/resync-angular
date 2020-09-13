import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { MatCardModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { AlarmComponent } from './alarm/alarm.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NoteComponent,
    AlarmComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'todo', component: NoteComponent},
      {path: 'alarm', component: AlarmComponent},
      {path: 'history', component: HistoryComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
