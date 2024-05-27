export interface feature {
  label: string;
  enabled: boolean;
  icon: React.JSX.Element
}

export interface packageCard { name: string, price: string; features: feature[], }
