import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import CoachSlider from './slidercomp/coachSlider';
import AmbassadorSlider from './slidercomp/AmbassadorSlider';
import CommentatorSlider from './slidercomp/CommentatorSlider';
import SpeakerSlider from './slidercomp/SpeakerSlider';

export default function SlideContent() {
  const params = useParams();
  const slideId = parseInt(params?.slideId, 10); // String yerine integer dönüşümü

  return (
    <StyledWrapper>
      <StyledTitle>
        {/* <span>Slide: {slideId}</span> */}

        {slideId === 0 && <CoachSlider />}
        {slideId === 1 && <CommentatorSlider/>}
        {slideId === 2 && <AmbassadorSlider/>}
        {slideId === 3 && <SpeakerSlider/>}
      </StyledTitle>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  color: #333;
  font-size: 2rem;
  text-align: center;
`;

const StyledTitle = styled.h1`
  
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
