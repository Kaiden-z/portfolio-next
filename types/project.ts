import { Media } from "./media";

export type Project = {
    name: string;
    tags: string[];
    description: string;
    media: Media[];
    githubUrl?: string;
    itchUrl?: string;
    steamUrl?: string;
}