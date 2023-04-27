import React from "react";
import ReactImageMagnify from "react-image-magnify";

const MagnifyImage = ({ smallImage, largeImage }) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactImageMagnify
        {...{
          smallImage,
          largeImage,
          isHintEnabled: true,
          enlargedImageContainerDimensions: { width: "200%", height: "200%" },
          shouldHideHintAfterFirstActivation: false,
        }}
        isActivated={isZoomed}
      />
    </div>
  );
};

export default MagnifyImage;
