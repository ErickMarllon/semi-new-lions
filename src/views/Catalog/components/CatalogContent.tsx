import { motion } from "framer-motion";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type {
  ActiveFiltersProps,
  Vehicle,
  VehicleFilters as FilterType,
} from "../types";
import { VehicleFilters } from "./VehicleFilters";
import { VehicleCard } from "./VehicleCard";

interface CatalogContentProps {
  vehicles: Vehicle[];
  filters: FilterType;
  activeFilters: ActiveFiltersProps;
  currentPage: number;
  totalPages: number;
  onFilterChange: (filters: ActiveFiltersProps) => void;
  onPageChange: (page: number) => void;
  onOpenVehicle: (vehicle: Vehicle) => void;
}

export default function CatalogContent({
  vehicles,
  filters,
  activeFilters,
  currentPage,
  totalPages,
  onFilterChange,
  onPageChange,
  onOpenVehicle,
}: CatalogContentProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-24">
              <VehicleFilters
                filters={filters}
                activeFilters={activeFilters}
                onFilterChange={onFilterChange}
                totalResults={vehicles.length}
              />
            </div>
          </aside>

          <div className="flex-1">
            {vehicles.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {vehicles.map((vehicle, index) => (
                    <VehicleCard
                      key={vehicle.ref_id}
                      vehicle={vehicle}
                      index={index}
                      onContact={() => onOpenVehicle(vehicle)}
                    />
                  ))}
                </div>

                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-12"
                  >
                    <Pagination>
                      <PaginationContent>
                        <PaginationItem>
                          <PaginationPrevious
                            onClick={() =>
                              onPageChange(Math.max(1, currentPage - 1))
                            }
                            className={
                              currentPage === 1
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }
                          />
                        </PaginationItem>

                        {Array.from(
                          { length: Math.min(5, totalPages) },
                          (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) pageNum = i + 1;
                            else if (currentPage <= 3) pageNum = i + 1;
                            else if (currentPage >= totalPages - 2)
                              pageNum = totalPages - 4 + i;
                            else pageNum = currentPage - 2 + i;

                            return (
                              <PaginationItem key={pageNum}>
                                <PaginationLink
                                  onClick={() => onPageChange(pageNum)}
                                  isActive={currentPage === pageNum}
                                  className="cursor-pointer"
                                >
                                  {pageNum}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          },
                        )}

                        <PaginationItem>
                          <PaginationNext
                            onClick={() =>
                              onPageChange(
                                Math.min(totalPages, currentPage + 1),
                              )
                            }
                            className={
                              currentPage === totalPages
                                ? "pointer-events-none opacity-50"
                                : "cursor-pointer"
                            }
                          />
                        </PaginationItem>
                      </PaginationContent>
                    </Pagination>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-full bg-surface mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">🚗</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Nenhum veículo encontrado
                </h3>
                <p className="text-muted-foreground">
                  Tente ajustar os filtros para encontrar mais opções.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
