"use client"

import ChevronLeftIcon from "@/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/icons/ChevronRightIcon";
import { motion } from "motion/react";
import { Media } from "@/types/media";
import { useState } from "react";
import dynamic from "next/dynamic";

const Plyr = dynamic(
    () => import("plyr-react").then((mod) => mod.Plyr),
    {
        ssr: false,
    }
);

export default function MediaSlider({ media }: { media: Media[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (media.length === 0) {
        return null;
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    }
    
    return (
        <div className="media-slider">

            <div className="media-main">
                {media.length > 1 && (
                    <button
                        className="slider-arrow slider-arrow-left"
                        onClick={prevSlide}
                        aria-label="Previous media"
                    >
                        <ChevronLeftIcon />
                    </button>
                )}

                <div className="media-container">
                    <motion.div
                        className="media-track"
                        animate={{ x: `-${currentIndex * 100}%`}}
                        transition={{ duration: 0.4, ease: "easeInOut"}}
                    >
                        {media.map((item, _) => (
                            <div className="media-slide" key={item.src}>
                                {item.type === "video" ? (
                                    <Plyr
                                        source={{
                                            type: "video",
                                            sources: [
                                                {
                                                    src: item.src,
                                                    type: "video/mp4",
                                                },
                                            ],
                                            poster: item.poster,
                                        }}
                                        options={{
                                            volume: 0.5,
                                        }}
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="media-content"
                                        style={{ objectFit: item.fit ?? "cover" }}
                                    />
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {media.length > 1 && (
                    <button
                        className="slider-arrow slider-arrow-right"
                        onClick={nextSlide}
                        aria-label="Next media"
                    >
                        <ChevronRightIcon />
                    </button>
                )}
            </div>

            {media.length > 1 && (
                <div className="slider-dots">
                {media.map((_, index) => (
                    <button
                    key={index}
                    className={`slider-dot ${
                        index === currentIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to media ${index + 1}`}
                    />
                ))}
                </div>
            )}

        </div>
    );
}