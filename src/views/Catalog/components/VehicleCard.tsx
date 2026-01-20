import { motion } from "framer-motion";
import { Calendar, Gauge, Fuel, Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { VehicleCardProps } from "../types";
import { formatKm } from "@/utils/formatKm";

export const VehicleCard = ({
  vehicle,
  index,
  onContact,
}: VehicleCardProps) => {
  const mainImage =
    vehicle.media_links.frente ||
    vehicle.media_links.frente_motorista ||
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group bg-card shadow-[0_0px_20px_-12px_hsl(43_74%_49%/0.1)] hover:shadow-[0_0px_28px_-12px_hsl(43_74%_49%/0.1)] border-gold-700/10 hover:border-gold-700/30 rounded-2xl overflow-hidden border  card-hover"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={mainImage}
          alt={`${vehicle.marca} ${vehicle.modelo}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold">
            {vehicle.carroceria}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs text-primary font-medium uppercase tracking-wider">
              {vehicle.marca}
            </p>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mt-1">
              {vehicle.modelo}
            </h3>
            {vehicle.versao && (
              <p className="text-sm text-muted-foreground mt-0.5">
                {vehicle.versao}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-primary" />
            {vehicle.ano_fabricacao}/{vehicle.ano_modelo}
          </span>
          <span className="flex items-center gap-1.5">
            <Gauge className="w-3.5 h-3.5 text-primary" />
            {formatKm(vehicle.km)} km
          </span>
          <span className="flex items-center gap-1.5">
            <Fuel className="w-3.5 h-3.5 text-primary" />
            {vehicle.combustivel}
          </span>
          <span className="flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-primary" />
            {vehicle.cor}
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-center">
            <Button size="sm" variant={"gold"} onClick={onContact}>
              Solicitar Atendimento
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
