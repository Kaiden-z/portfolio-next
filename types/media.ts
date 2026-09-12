export type Media =
    | {
        type: "image";
        src: string;
        alt?: string;
        fit?: "cover" | "contain"
      }
    | {
        type: "video";
        src: string;
        poster?: string;
        fit?: "cover" | "contain"
      };