import React, { useState } from "react";

interface ImagemComPlaceholderProps {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImagemComPlaceholder: React.FC<ImagemComPlaceholderProps> = ({ src, alt = "", className = "", style }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#222831",
        borderRadius: 8,
        overflow: "hidden",
        ...style,
      }}
      className={className}
    >
      {/* Placeholder */}
      {!loaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#222831",
            filter: "blur(2px)",
            transition: "opacity 0.5s",
            zIndex: 1,
          }}
        />
      )}
      <img
        src={src}
        alt={alt}
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.5s",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          borderRadius: 8,
          position: "relative",
          zIndex: 2,
        }}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </div>
  );
};

export default ImagemComPlaceholder;