export type Media =
    | {
        type: "image";
        src: string;
        alt?: string;
      }
    | {
        type: "video";
        src: string;
        poster?: string;
      };