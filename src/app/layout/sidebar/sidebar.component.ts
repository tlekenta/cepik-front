import { Component, OnInit } from '@angular/core';
import { Page } from './page';

const PAGES: Page[] = [
  { id: 1, url: '/dashboard', names: "Dashboard" },
  { id: 2, url: "/vehicle", names: "Pojazdy"},
  { id: 3, url: "/person", names: "Osoby"}
]

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  pages: Page[];
  selectedPage: Page;
  getPages() : void{
    this.pages = PAGES;
  }
  ngOnInit() {
    this.getPages();
  }

  onselect(page: Page): void {
    this.selectedPage = page;
  }
}
