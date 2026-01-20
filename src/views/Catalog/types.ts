export interface ActiveFiltersProps {
  marca?: string;
  carroceria?: string[];
  combustivel?: string;
  cor?: string;
  anoModelo?: { anoMin: string; anoMax: string };
  search?: string;
}

export interface VehicleMedia {
  frente?: string | null;
  frente_motorista?: string | null;
  frente_passageiro?: string | null;
  lateral_passageiro?: string | null;
  lateral_motorista?: string | null;
  mala_fechada?: string | null;
  mala_aberta?: string | null;
  porta_dianteira_motorista?: string | null;
  porta_traseira_motorista?: string | null;
  porta_dianteira_carona?: string | null;
  porta_traseira_carona?: string | null;
  compartimento_dianteiro_motorista?: string | null;
  compartimento_traseiro_motorista?: string | null;
  compartimento_dianteiro_carona?: string | null;
  compartimento_traseiro_carona?: string | null;
  tabelier_completo?: string | null;
  som?: string | null;
  volante?: string | null;
  cambio?: string | null;
  bancos_traseiros?: string | null;
  video_exterior?: string | null;
  video_interior?: string | null;
}

export interface VehicleAccessory {
  icon: string | null;
  nome: string;
}

export interface Vehicle {
  ref_id: string;
  stock_id: string;
  marca: string;
  modelo: string;
  versao: string;
  carroceria: string;
  cor: string;
  ano_fabricacao: string;
  ano_modelo: string;
  km: string;
  combustivel: string;
  acessorios: VehicleAccessory[];
  media_links: VehicleMedia;
}

export interface VehicleFilters {
  carrocerias: string[];
  marcas: string[];
  modelos: string[];
  versoes: string[];
  cores: string[];
  combustiveis: string[];
  anosModelo: number[];
  anosFabricacao: number[];
  anosModeloTotais: number[];
  anosFabricacaoTotais: number[];
}

export interface MockData {
  totalRegistros: number;
  totalPaginas: number;
  paginaAtual: number;
  filtros: VehicleFilters;
  veiculos: Vehicle[];
}

export interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
  onContact: () => void;
}
