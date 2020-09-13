import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  sidebarItems: SideBar[] = [
    { id: 'todo', pageLink: 'todo', pageTitle: 'Todo', icon: 'fas fa-bell' },
    { id: 'alarm', pageLink: 'alarm', pageTitle: 'Alarm', icon: 'fas fa-clock' },
    { id: 'history', pageLink: 'history', pageTitle: 'History', icon: 'fas fa-history' },
  ];
  constructor(private router: Router) {}
  expandSidebar = true;
  showOverlay = false;
  selectedItemIndex = '';
  selectedSubItemIndex = '';
  subMenuExpand = '';

  ngOnInit() { }

  sidebarClicked(item) { 
    if (item.pageTitle == 'Todo') {
      console.log("TEST")
      this.router.navigate(['todo']);
    } else if (item.pageTitle == 'Alarm') {
      this.router.navigate(['alarm']);
    } else if (item.pageTitle == 'History') {
      this.router.navigate(['history']);
    }
  }
}

export interface SideBar {
  id: string;
  parentId?: string;
  pageLink: string;
  pageTitle: string;
  icon: string;
}