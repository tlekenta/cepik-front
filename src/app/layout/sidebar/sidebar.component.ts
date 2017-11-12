import { Component, OnInit } from '@angular/core';
import { Page } from './page';
import { MenuPage } from './menupage';
import { PAGES } from './mock-pages';
import { PAGES_PERSON } from './mock-pages';
import { PAGES_VEHICLE } from './mock-pages';
import { PAGES_DAS } from './mock-pages';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  pages: MenuPage[];
  selectedPage: MenuPage;
  selectedItemPage: Page;
  itempages: Page[];

  getPages() : void{
    this.pages = PAGES;
  }
  ngOnInit() {
    this.getPages();
    this.onselect(PAGES[0]);
  }
  onselect(page: MenuPage): void {
    this.selectedPage = page;
  }
  onselectItem(page: Page): void {
    this.selectedItemPage = page;
  }
  onselectItemAll(page: Page[]): void {
    this.itempages = page;
  }
}