import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export class Alarm {
  title: String;
  myDate: Date;
  edit: boolean;
}

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.scss']
})
export class AlarmComponent implements OnInit {
  titleModel: String;
  dateTimeModel: String;
  newDateTimeModel: String;
  alarms: Alarm[];
  historyAlarms: Alarm[];

  constructor() {
    this.titleModel = '';
    this.dateTimeModel = '';
    this.alarms = [];
    this.historyAlarms = [];
  }

  createAlarm() {
    var myDate = new Date(this.dateTimeModel as string);
    const newAlarm: Alarm = {
      title: this.titleModel,
      myDate: myDate,
      edit: false,
    };
    if (new Date() > myDate && !isNaN(myDate.valueOf())) {
      this.historyAlarms.push(newAlarm);
      alert("Added to history")
    } else if (!isNaN(myDate.valueOf())) {
      this.alarms.push(newAlarm);
      var dif = newAlarm.myDate.getTime() - new Date().getTime();
      console.log(dif);
      setTimeout(() => {
        const index: number = this.alarms.indexOf(newAlarm);
        alert("Get ready to do your task: " + newAlarm.title);
        this.historyAlarms.push(newAlarm);
        this.alarms.splice(index, 1);
      }, dif);
    }
    // set the model values to '' again
    this.titleModel = this.dateTimeModel = '';
  }
  ngOnInit() {
    if (localStorage.hasOwnProperty('myAlarms')) {
      this.alarms = JSON.parse(localStorage.getItem('myAlarms'));
    }
    if (localStorage.hasOwnProperty('historyAlarms')) {
      this.historyAlarms = JSON.parse(localStorage.getItem('historyAlarms'));
    }
  }
  ngOnDestroy() {
    this.alarms === null ?
      localStorage.setItem('myAlarms', JSON.stringify([])) :
      localStorage.setItem('myAlarms', JSON.stringify(this.alarms));

    this.historyAlarms === null ?
      localStorage.setItem('historyAlarms', JSON.stringify([])) :
      localStorage.setItem('historyAlarms', JSON.stringify(this.historyAlarms));
  }
  deleteAlarm(item) {
    const index: number = this.alarms.indexOf(item);
    this.historyAlarms.push(item);
    this.alarms.splice(index, 1);
  }
  editAlarm(item) {
    var myDate = new Date(this.newDateTimeModel as string);
    console.log(myDate);
    if (!isNaN(myDate.valueOf()) && new Date() > myDate) {
      item.myDate = myDate
      this.historyAlarms.push(item);
      const index: number = this.alarms.indexOf(item);
      this.alarms.splice(index, 1);
      alert("Added to history");
    }
    else if (!isNaN(myDate.valueOf())){
      item.myDate = myDate;
    };
  }
  reset() {
    this.newDateTimeModel = '';
  }
}
