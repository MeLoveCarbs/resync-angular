import { Component, OnInit } from '@angular/core';
import { Alarm } from '../alarm/alarm.component';
import { Quicknotes } from '../note/note.component';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  historyAlarms: Alarm[];
  historyNotes: Quicknotes[];
  constructor() { 
    this.historyAlarms = [];
    this.historyNotes = [];
  }

  ngOnInit() {
    if (localStorage.hasOwnProperty('historyNotes')) {
      this.historyNotes = JSON.parse(localStorage.getItem('historyNotes'));
    }
    if (localStorage.hasOwnProperty('historyAlarms')) {
      this.historyAlarms = JSON.parse(localStorage.getItem('historyAlarms'));
    }
  }

  ngOnDestroy() {
    this.historyNotes === null ? 
    localStorage.setItem('historyNotes', JSON.stringify([])) :
    localStorage.setItem('historyNotes', JSON.stringify(this.historyNotes));

    this.historyAlarms === null ? 
    localStorage.setItem('historyAlarms', JSON.stringify([])) :
    localStorage.setItem('historyAlarms', JSON.stringify(this.historyAlarms));
  }

  deleteHistoryAlarms(item) {
    const index: number = this.historyAlarms.indexOf(item);
    this.historyAlarms.splice(index, 1);
  }
  deleteHistoryNotes(item) {
    const index: number = this.historyNotes.indexOf(item);
    this.historyNotes.splice(index, 1);
  }
}
