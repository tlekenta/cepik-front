import { Component, OnInit } from '@angular/core';
import { Page } from './page';

const PAGES: Page[] = [
  { id: 1, url: '/dashboard', names: "Dashboard" },
  { id: 2, url: "/vehicle", names: "Pojazdy"},
  { id: 3, url: "/dashboard", names: "Osoby"}
]

const PAGES_VEHICLE: Page[] = [
  { id: 1, url: '/vehicleadd', names: "Dodaj pojazd" },
  { id: 2, url: "/vehicleremove", names: "Usun pojazd"},
]

const PAGES_PERSON: Page[] = [
  { id: 1, url: '/vehicleadd', names: "Dodaj osobe" },
  { id: 2, url: "/vehicleremove", names: "Usun osobe"},
]

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  pages: Page[];
  vehiclepages: Page[];
  personpages: Page[];
  selectedPage: Page;
  vehicleselectedPage: Page;
  personselectedPage: Page;

  getPages() : void{
    this.pages = PAGES;
  }
  getPagesVehicle() : void{
    this.vehiclepages = PAGES_VEHICLE;
  }
  getPagesPerson() : void{
    this.personpages = PAGES_PERSON;
  }
  ngOnInit() {
    this.getPages();
    this.getPagesVehicle();
    this.getPagesPerson();
  }
  onselect(page: Page): void {
    this.selectedPage = page;
  }
  onselectvehicle(page: Page): void {
    this.vehicleselectedPage = page;
  }
  onselectperson(page: Page): void {
    this.personselectedPage = page;
  }
}