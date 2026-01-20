import { useState, useMemo } from "react";
import type { ActiveFiltersProps, Vehicle } from "./types";
import CatalogHeader from "./components/CatologHeader";
import CatalogContent from "./components/CatalogContent";
import { VEHICLE_CATALOG_RESPONSE_MOCK } from "@/constants/vehicleCatalog";
import CatalogDialog from "./components/CatologDialog";

const ITEMS_PER_PAGE = 12;

export default function CatalogScreen() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersProps>({});
  const [open, setOpen] = useState<Vehicle | null>(null);
  const { veiculos, totalRegistros, filtros } = VEHICLE_CATALOG_RESPONSE_MOCK;

  const filteredVehicles = useMemo(() => {
    return veiculos.filter((vehicle: Vehicle) => {
      if (activeFilters.marca && vehicle.marca !== activeFilters.marca) {
        return false;
      }

      if (
        activeFilters.carroceria &&
        !activeFilters.carroceria.includes(vehicle.carroceria)
      ) {
        return false;
      }

      if (
        activeFilters.combustivel &&
        vehicle.combustivel !== activeFilters.combustivel
      ) {
        return false;
      }

      if (activeFilters.cor && vehicle.cor !== activeFilters.cor) {
        return false;
      }

      if (activeFilters.anoModelo) {
        const anoMin = Number(activeFilters.anoModelo.anoMin);
        const anoMax = Number(activeFilters.anoModelo.anoMax);

        if (
          Number(vehicle.ano_modelo) < anoMin ||
          Number(vehicle.ano_modelo) > anoMax
        ) {
          return false;
        }
      }

      if (activeFilters.search) {
        const searchLower = activeFilters.search.toLowerCase();

        const matchesMarca = vehicle.marca.toLowerCase().includes(searchLower);

        const matchesModelo = vehicle.modelo
          .toLowerCase()
          .includes(searchLower);

        const matchesVersao = vehicle.versao
          ?.toLowerCase()
          .includes(searchLower);

        if (!matchesMarca && !matchesModelo && !matchesVersao) {
          return false;
        }
      }

      return true;
    });
  }, [veiculos, activeFilters]);

  const totalPages = Math.ceil(filteredVehicles.length / ITEMS_PER_PAGE);
  const paginatedVehicles = filteredVehicles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleFilterChange = (filters: typeof activeFilters) => {
    setActiveFilters(filters);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <CatalogHeader total={totalRegistros} />

      <CatalogContent
        vehicles={paginatedVehicles}
        filters={filtros}
        activeFilters={activeFilters}
        currentPage={currentPage}
        totalPages={totalPages}
        onFilterChange={handleFilterChange}
        onPageChange={setCurrentPage}
        onOpenVehicle={setOpen}
      />

      <CatalogDialog open={open} setOpen={setOpen} />
    </div>
  );
}
