export interface IGetImages {
  sys: {
    id: string;
    createdAt: string;
  };
  fields: {
    title: string;
    description: string;
    name: string;
    price: number;
    size: string;
    category: string;
    isSold: boolean;
    image: {
      fields: {
        description: string;
        file: {
          url: string;
          title: string;
        };
      };
    };
  };
}
