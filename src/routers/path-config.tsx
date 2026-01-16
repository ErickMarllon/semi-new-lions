import { PATH_PAGE } from "./paths";

export interface NavLinkConfig {
  label: string;
  href: string;
}

export const NAV_CONFIG: NavLinkConfig[] = [
  {
    label: "Financiamento",
    href: PATH_PAGE.financing,
  },
  {
    label: "Fipe",
    href: PATH_PAGE.fipe,
  },
  {
    label: "Lojas",
    href: PATH_PAGE.stores,
  },
  {
    label: "Pós-venda",
    href: PATH_PAGE.afterSales,
  },
  {
    label: "Catálogo",
    href: PATH_PAGE.catalog,
  },
  {
    label: "Agende uma visita",
    href: PATH_PAGE.scheduleVisit,
  },
];
