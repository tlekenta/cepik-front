import { Page } from './page'
import { MenuPage } from './menupage'

export const PAGES_VEHICLE: Page[] = [
  { id: 1, url: '/vehicleadd', names: "Dodaj pojazd" },
];

export const PAGES_PERSON: Page[] = [
  { id: 1, url: '/driveradd', names: "Dodaj osobe" },
];

export const PAGES_DAS: Page[] = [
];

export const PAGES: MenuPage[] = [
  { id: 1, url: '/dashboard', names: "Dashboard", pageitem: PAGES_DAS },
  { id: 2, url: "/vehicle", names: "Pojazdy", pageitem: PAGES_VEHICLE},
  { id: 3, url: "/driver", names: "Osoby", pageitem: PAGES_PERSON}
];
