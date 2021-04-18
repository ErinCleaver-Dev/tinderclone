import React from 'react'
import styled from 'styled-components'
import TenderCard from 'react-tinder-card'
import * as TenderFile from '../../Data/TenderFile.json'


function TenderCards() {
    console.log(TenderFile);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the Screen!");
    }

    return (
        <Container>
            <CardContainer>
                {
                
                TenderFile.TenderCard.map((card) =>(
                        <TenderCard
                            className="swipe"
                            key={card.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) =>swiped(dir, card.name)}
                            onCardLeftScreen={() => outOfFrame(card.name)}
                        >
                            <div style={{backgroundImage: `url(${card.url})`}}
                            className="card"
                            >
                                <h3>{card.name}</h3>
                            </div>
                        </TenderCard>
                    ))
                }
            </CardContainer>
        </Container>
    )
}

export default TenderCards
const Container = styled.div`
    margin-top: 10vh;

`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
   .card {
        position: relative;
        background-color: #fff;
        width: 600px;
        padding: 20px;
        max-width: 60vh;
        height: 60vh;
        box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
        border-radius: 20px;
        background-size: cover;
        background-position: center;
    }
    .swipe {
        position: absolute;
    }
    .card h3 {
        position: absolute;
        bottom: 0;
        margin: 10px;
        color: #fff;
    }
`

