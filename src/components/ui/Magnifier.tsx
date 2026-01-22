import React, { useState, type MouseEvent } from 'react';
import './Magnifier.css';

interface MagnifierProps {
    src: string;
    alt: string;
    zoomLevel?: number;
    glassSize?: number;
    className?: string;
}

export const Magnifier: React.FC<MagnifierProps> = ({
    src,
    alt,
    zoomLevel = 2.5,
    glassSize = 150,
    className = ''
}) => {
    const [zoomable, setZoomable] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0, mouseX: 0, mouseY: 0, containerWidth: 0, containerHeight: 0 });

    const handleMouseEnter = () => setZoomable(true);
    const handleMouseLeave = () => setZoomable(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        // Calculate percentage position
        let x = ((e.clientX - left) / width) * 100;
        let y = ((e.clientY - top) / height) * 100;

        // Boundaries check not strictly valid for backgroundPosition as percentage, 
        // but useful if we want to clamp where the glass can go. 
        // For specific background positioning:
        // 0% 0% is top left overlaying top left of image.
        // 100% 100% is bottom right overlaying bottom right.

        setPosition({
            x,
            y,
            mouseX: e.clientX - left,
            mouseY: e.clientY - top,
            containerWidth: width,
            containerHeight: height
        });
    };

    return (
        <div
            className={`magnifier-container ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <img src={src} alt={alt} className="magnifier-image" />
            {zoomable && (
                <div
                    className="magnifier-glass"
                    style={{
                        width: `${glassSize}px`,
                        height: `${glassSize}px`,
                        backgroundImage: `url(${src})`,
                        backgroundPosition: `${position.x}% ${position.y}%`,
                        // We want the background image size to be (elementWidth * zoomLevel) x (elementHeight * zoomLevel)
                        // Since we can't easily get pixel values here without another state/ref read, let's use percentage relative to the glass?
                        // If background-size is 250% (zoomLevel*100), it's relative to the GLASS size (e.g. 150px), which is WRONG.
                        // We need it relative to the original element size.
                        // But CSS background-size on an element is relative to THAT element.
                        // So we MUST use pixel values or calculate the ratio.
                        // Ratio: (ContainerWidth / GlassWidth) * ZoomLevel * 100 % 
                        // But we don't have ContainerWidth in simple variable easily without putting it in state.
                        // Let's rely on the state-stored mouseX/element dimensions or just pass strict pixel sizing if possible?
                        // Better: We are updating position on mousemove. Let's just store the container width/height in state there too?
                        // Or just grab it from a ref. But we have 'width' in handleMouseMove.
                        // Let's add width/height to the position state.
                        backgroundSize: `${position.containerWidth * zoomLevel}px ${position.containerHeight * zoomLevel}px`,
                        left: `${position.mouseX - glassSize / 2}px`,
                        top: `${position.mouseY - glassSize / 2}px`
                    }}
                />
            )}
        </div>
    );
};
