export interface IGetEvents {
  fields: {
    sys: {
      id: string;
    };
    title: string;
    description: string;
    image: {
      fields: {
        description: string;

        file: {
          url: string;
        };
      };
    };
  };
}
