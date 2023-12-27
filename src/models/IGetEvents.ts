export interface IGetEvents {
  fields: {
    sys: {
      id: string;
    };
    title: string;
    description: string;
    image: {
      sys: {
        createdAt: string;
      };
      fields: {
        description: string;

        file: {
          url: string;
        };
      };
    };
  };
}
