export type DesignRequest = {
  id: string;
  title: string;
  concept: string;
  targetAudience: string;
  price: number;
  colorCode?: string[];
  fontName?: string;
  deadline?: Date;
};
