"use client"

import MediaSlider from "@/components/MediaSlider";
import { Media } from "@/types/media"

const featured_media : Media[] = [
    {
        type: "image",
        src: "images/projects/golfinSlayer/golfinSlayerTitle.png",
    },
    {
        type: "image",
        src: "images/projects/vomd/vomdScreenshot1.jpg"
    },
    {
        type: "image",
        src: "images/projects/vomd/vomdScreenshot2.jpg"
    },
    {
        type: "image",
        src: "images/projects/vomd/vomdScreenshot3.jpg"
    }
]

export default function Home() {
    return (
        <main className="hero">
            <section className="hero-intro">
                <h1>
                    KAIDEN
                    <br />
                    ZAPANTA
                </h1>

                <h2>Software Engineer | Gameplay Programmer</h2>
            </section>

            <section className="featured-project">
                <div className="featured-project-header">
                    <span>01</span>
                    <span>FEATURED PROJECT</span>
                </div>

                <div className="featured-project-content">
                    <div className="featured-project-info">
                        <h3>Golfin' Slayer</h3>

                        <p>
                            A golf-themed isometric action rogue-like.
                        </p>

                        <a href="/projects">
                            View project →
                        </a>
                    </div>

                    <div className="featured-project-media">
                        <MediaSlider media={featured_media} />
                    </div>
                </div>
            </section>
        </main>
    );
}