export const PATH_PAGE = {
  home: "/",
  financing: "/financiamento",
  fipe: "/fipe",
  stores: "/lojas",
  afterSales: "/pos-venda",
  catalog: "/catalogo",
  scheduleVisit: "/agendar-visita",
};

export type RoutePaths = typeof PATH_PAGE;
export type RouteKey = keyof RoutePaths;
export type RouteValue<K extends RouteKey> = RoutePaths[K];
