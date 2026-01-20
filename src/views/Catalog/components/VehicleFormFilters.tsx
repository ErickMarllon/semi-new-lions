import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { VehicleFilters as FilterType } from "../types";
import { Slider } from "@/components/ui/slider";
import type { ActiveFiltersProps } from "../types";

interface VehicleFormFiltersProps {
  filters: FilterType;
  activeFilters: ActiveFiltersProps;
  onFilterChange: (filters: VehicleFormFiltersProps["activeFilters"]) => void;
}
const MIN_YEAR_VEHICLE = 2010;
const MAX_YEAR_VEHICLE = 2025;
export const VehicleFormFilters = ({
  filters,
  activeFilters,
  onFilterChange,
}: VehicleFormFiltersProps) => {
  const handleFilterChange = (key: string, value: string) => {
    onFilterChange({
      ...activeFilters,
      [key]: value === "all" ? undefined : value,
    });
  };

  return (
    <>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Marca
          </label>
          <Select
            value={activeFilters.marca || "all"}
            onValueChange={(v) => handleFilterChange("marca", v)}
          >
            <SelectTrigger className="bg-surface border-border/50 w-full">
              <SelectValue placeholder="Todas as marcas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as marcas</SelectItem>
              {filters.marcas.map((marca) => (
                <SelectItem key={marca} value={marca}>
                  {marca}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Carroceria
          </label>

          <div className="space-y-2">
            {filters.carrocerias.map((carroceria) => {
              const checked = activeFilters.carroceria?.includes(carroceria);

              return (
                <label
                  key={carroceria}
                  className="flex items-center gap-2 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={checked ?? false}
                    onChange={(e) => {
                      const current = activeFilters.carroceria ?? [];

                      const updated = e.target.checked
                        ? [...current, carroceria]
                        : current.filter((c) => c !== carroceria);

                      onFilterChange({
                        ...activeFilters,
                        carroceria: updated.length ? updated : undefined,
                      });
                    }}
                  />
                  {carroceria}
                </label>
              );
            })}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Combustível
          </label>
          <Select
            value={activeFilters.combustivel || "all"}
            onValueChange={(v) => handleFilterChange("combustivel", v)}
          >
            <SelectTrigger className="bg-surface border-border/50 w-full">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {filters.combustiveis.map((combustivel) => (
                <SelectItem key={combustivel} value={combustivel}>
                  {combustivel}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Cor
          </label>
          <Select
            value={activeFilters.cor || "all"}
            onValueChange={(v) => handleFilterChange("cor", v)}
          >
            <SelectTrigger className="bg-surface border-border/50 w-full">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              {filters.cores.map((cor) => (
                <SelectItem key={cor} value={cor}>
                  {cor}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium text-foreground mb-2 block">
            Ano do modelo
          </label>

          <Slider
            min={MIN_YEAR_VEHICLE}
            max={MAX_YEAR_VEHICLE}
            step={1}
            value={[
              Number(activeFilters.anoModelo?.anoMin ?? MIN_YEAR_VEHICLE),
              Number(activeFilters.anoModelo?.anoMax ?? MAX_YEAR_VEHICLE),
            ]}
            onValueChange={([min, max]) =>
              onFilterChange({
                ...activeFilters,
                anoModelo: {
                  anoMin: `${min}`,
                  anoMax: `${max}`,
                },
              })
            }
            className="mt-4     
    **:data-[orientation=horizontal]:bg-[linear-gradient(135deg,var(--color-gold-500),var(--color-gold-700))]
   **:[[role=slider]]:border-gold-500
    **:[[role=slider]]:bg-gold-500"
          />

          <div className="flex justify-between text-sm text-muted-foreground mt-2">
            <span>{activeFilters.anoModelo?.anoMin ?? MIN_YEAR_VEHICLE}</span>
            <span>{activeFilters.anoModelo?.anoMax ?? MAX_YEAR_VEHICLE}</span>
          </div>
        </div>
      </div>
    </>
  );
};
