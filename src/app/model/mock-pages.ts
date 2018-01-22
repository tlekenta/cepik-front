import { Page } from './page'
import { MenuPage } from './menupage'

export const PAGES_VEHICLE: Page[] = [
  { id: 1, url: '/vehicleadd', names: "Dodaj pojazd" },
  { id: 2, url: "/vehicleremove", names: "Usun pojazd"},
];

export const PAGES_PERSON: Page[] = [
  { id: 1, url: '/vehicleadd', names: "Dodaj osobe" },
  { id: 2, url: "/vehicleremove", names: "Usun osobe"},
];

export const PAGES_DAS: Page[] = [
  { id: 1, url: '/vehicleadd', names: "111" },
  { id: 2, url: "/vehicleremove", names: "222"},
];

export const PAGES: MenuPage[] = [
  { id: 1, url: '/dashboard', names: "Dashboard", pageitem: PAGES_DAS },
  { id: 2, url: "/vehicle", names: "Pojazdy", pageitem: PAGES_VEHICLE},
  { id: 3, url: "/dashboard", names: "Osoby", pageitem: PAGES_PERSON}
];
