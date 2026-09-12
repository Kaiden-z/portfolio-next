import { Media } from "./media";

export type Project = {
    name: string;
    tags: string[];
    description: string;
    media: Media[];
    links?: Link[];
}

export type Link = {
    site: "GitHub" | "Itch.io" | "Steam" | "CurseForge";
    url: string;
}