import React from 'react';

const MainSlide = (props) => {
  const { title, figure, extendedStyle } = props;
  return (
    <div className="image-container">
      <img src={figure.src} alt={figure.alt} style={extendedStyle ? extendedStyle : {}} />
      <div className="fixed-element-karierre">
        <img src={title.src} alt={title.alt} />
      </div>
    </div>
  );
};

export default MainSlide;
