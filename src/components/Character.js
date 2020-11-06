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
        );
    }
    
    return (
        <StyledWrapper>
            <StyledImg onMouseOver={() => btnClosed ? 
                open(
                    <DetailsContainer>{setDetails(details)}</DetailsContainer>
                ) 
                : null
                }
                onMouseOut={() => close()}>
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
    max-height: 10rem;
    max-width: 10rem;
`;

const StyledImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        border-radius: 3px;
        margin-left: 1rem;
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
    display: flex;
    flex-direction: wrap;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    background-color: rgba(64, 64, 64, 0.8);
    height: 9rem;
    font-size: 2rem;
    color: white;
`;