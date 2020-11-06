// Write your Character component here
import React, { useState } from "react";
import styled from "styled-components";

export default function Character(props) {
    const { details } = props;
    const [info, setInfo] = useState(null);
    const [btnClosed, setBtnClosed] = useState(true);

    const open = (contents) => {
        setInfo(contents);
        setBtnClosed(false);
      };

      const close = () => {
        setInfo(null);
        setBtnClosed(true);
      };

      function setDetails(dets) {
          return(
            `Name: ${dets.name}, Status: ${dets.status}, Species: ${dets.species}, Origin: ${dets.origin.name}`
          )
      }
    

    return (
        <StyledWrapper>
            <StyledImg onClick={() => btnClosed ? 
            open(
                <DetailsContainer>{setDetails(details)}</DetailsContainer>
                // `Name: ${details.name}, Status: ${details.status} `
                ) 
                : close()
                }>
            {/* {btnClosed ? "Learn about the character!" : "Close"} */}
                {details.id <= 5 ? <img src={details.image} alt={details.name}></img> : null}
            </StyledImg>
            <StyledInfo>{info}</StyledInfo>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* height: 90px;
    width: 90px; */
    /* border: 5px solid black; */
    max-height: 10rem;
    max-width: 10rem;
`;

const StyledImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        /* border: 2px solid black; */
        border-radius: 3px;
        margin: 1rem;
        height: 10rem;
        opacity: 70%;
        z-index:1;
        &:hover {
            opacity: 100%;
            transform: scale(1.1);
            position:relative; 
            z-index:2;
            transition: all 0.3s ease-in-out;
        }
        transition: all 0.3s ease-in-out;
    }
`;

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    width: 100vh;
`;

const StyledInfo = styled.div`
    /* border: 1px solid black; */
    display: flex;
    flex-direction: wrap;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    /* padding: 50px; */
    background-color: rgba(64, 64, 64, 0.8);
    height: 9rem;
    width: auto;
    font-size: 2rem;
    color: white;
`;