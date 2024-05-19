export interface feature {
  label: string;
  enabled: boolean;
  icon: React.JSX.Element
}

export interface packageCard { price: string; features: feature[], }
