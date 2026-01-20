import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { VehicleFilters as FilterType } from "../types";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { VehicleFormFilters } from "./VehicleFormFilters";
import type { ActiveFiltersProps } from "../types";

interface VehicleFiltersProps {
  filters: FilterType;
  activeFilters: ActiveFiltersProps;
  onFilterChange: (filters: VehicleFiltersProps["activeFilters"]) => void;
  totalResults: number;
}

export const VehicleFilters = ({
  filters,
  activeFilters,
  onFilterChange,
  totalResults,
}: VehicleFiltersProps) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilterChange = (key: string, value: string) => {
    onFilterChange({
      ...activeFilters,
      [key]: value === "all" ? undefined : value,
    });
  };

  const clearFilters = () => {
    onFilterChange({});
  };

  const hasActiveFilters = Object.values(activeFilters).some(
    (v) => v && v !== "",
  );

  return (
    <>
      <div
        className={`flex flex-wrap gap-4 w-full lg:hidden ${hasActiveFilters ? "items-start" : "items-center"}`}
      >
        <Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            setShowMobileFilters(!showMobileFilters);
          }}
          className="max-w-32 justify-between border-border/50 flex-[0_0_8rem] md:flex-[0_0_20%]"
        >
          <span className="flex items-center gap-2 ">
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${showMobileFilters ? "rotate-180" : ""}`}
          />
        </Button>

        {hasActiveFilters && (
          <Button
            variant="outline"
            onClick={clearFilters}
            className="text-destructive hover:text-red-500 max-w-26 flex-[0_0_8rem] md:flex-[0_0_14%]"
          >
            <X className="w-4 h-4 " />
            Limpar
          </Button>
        )}

        <div className={`relative flex-1 min-w-52`}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar modelo..."
            value={activeFilters.search || ""}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className="pl-10 bg-surface border-border/50"
          />
        </div>
      </div>

      <motion.div
        className={`bg-card rounded-2xl border border-border/50 p-6 hidden  ${showMobileFilters ? "block" : " lg:block"}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative mb-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Buscar modelo..."
            value={activeFilters.search || ""}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className="pl-10 bg-surface border-border/50"
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-destructive hover:text-red-500  flex-[0_0_8rem] md:flex-[0_0_14%]"
            >
              <X className="w-4 h-4 " />
              Limpar Filtros
            </Button>
          )}
        </div>
        <VehicleFormFilters
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={onFilterChange}
        />

        <div className="mt-6 pt-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">{totalResults}</span>{" "}
            veículos encontrados
          </p>
        </div>
      </motion.div>

      <Drawer open={showMobileFilters} onOpenChange={setShowMobileFilters}>
        <DrawerContent data-vaul-drawer-direction="right">
          <DrawerHeader>
            <DrawerTitle>Filtros</DrawerTitle>
            <DrawerDescription>
              Selecione as opções para encontrar o veículo ideal.
            </DrawerDescription>
          </DrawerHeader>

          <div className="px-4">
            <VehicleFormFilters
              filters={filters}
              activeFilters={activeFilters}
              onFilterChange={onFilterChange}
            />
          </div>

          <DrawerFooter>
            <div className="mt-6 pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">
                  {totalResults}
                </span>{" "}
                veículos encontrados
              </p>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
