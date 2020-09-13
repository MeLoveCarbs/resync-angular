import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tiles: TilesType[] = [
    { title: 'Todo', count: 0 },
    { title: 'Alarm', count: 0 },
    { title: 'History', count: 0 }
  ];
}
interface TilesType {
  title: string;
  count: number;
}