import { Component, OnInit } from '@angular/core';
export class Quicknotes {
  title: String;
  content: String;
  timestamp: Date;
  edit: boolean;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  titleModel: String;
  contentModel: String;
  newContentModel: String;
  quicknotes: Quicknotes[];
  historyNotes: Quicknotes[];

  constructor() {
    this.titleModel = '';
    this.contentModel = '';
    this.quicknotes = [];
    this.historyNotes = [];
  }
  ngOnInit() {
    if (localStorage.hasOwnProperty('myNotes')) {
      this.quicknotes = JSON.parse(localStorage.getItem('myNotes'));
      console.log("RETRIEVE");
    }
  }
  ngOnDestroy() {
    this.quicknotes === null ? 
    localStorage.setItem('myNotes', JSON.stringify([])) :
    localStorage.setItem('myNotes', JSON.stringify(this.quicknotes));


    this.historyNotes === null ? 
    localStorage.setItem('historyNotes', JSON.stringify([])) :
    localStorage.setItem('historyNotes', JSON.stringify(this.historyNotes));
  }
  createQuicknotes() {

    const newQuicknotes: Quicknotes = {
      title: this.titleModel,
      content: this.contentModel,
      timestamp: new Date(),
      edit: false,
    };

    this.quicknotes.push(newQuicknotes);
    console.log(this.quicknotes);
    // set the model values to '' again
    this.titleModel = this.contentModel = '';
  }
  deleteQuicknotes(item) {
    const index: number = this.quicknotes.indexOf(item);
    this.historyNotes.push(item);
    this.quicknotes.splice(index, 1);
  }
  editQuicknotes(item) {
    item.timestamp = Date();
    item.content = this.newContentModel;
  }
  reset() {
    this.newContentModel = '';
  }

}
