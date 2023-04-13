// UI側で扱うデザインの依頼の型
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

// バックエンドでのリクエストを受ける時、及びリクエストを投げるときに使う型
export type CreateDesignRequestInput = {
  userId: string;
  isClosed?: boolean;
  // idだけをundefined許容にする
  designRequest: Omit<DesignRequest, "id"> & { id?: string };
  createdAt: string;
  updatedAt: string;
};
