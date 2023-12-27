export interface IGetNews {
  fields: {
    description: {
      content: {
        0: {
          content: {
            0: {
              value: string;
            };
          };
        };
      };
    };
    title: string;
    image: {
      sys: {
        id: string;
      };
      fields: {
        title: string;
        file: {
          url: string;
        };
      };
    };
  };
}
