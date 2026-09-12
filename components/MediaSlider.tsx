import ChevronLeftIcon from "@/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/icons/ChevronRightIcon";
import { Media } from "@/types/media";
import { useState } from "react";


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

    const currentMedia = media[currentIndex];

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
                    {currentMedia.type === "video" ? (
                        <video
                            src={currentMedia.src}
                            poster={currentMedia.poster}
                            controls
                            loop
                            className="media-content"
                            style={{ objectFit: currentMedia.fit ?? "cover" }}
                        />
                    ) : (
                        <img
                            src={currentMedia.src}
                            alt={currentMedia.alt}
                            className="media-content"
                            style={{ objectFit: currentMedia.fit ?? "cover" }}
                        /> 
                    )}
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