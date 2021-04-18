import React from 'react'
import styled from 'styled-components'
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"

function SwipeButtons() {
    return (
        <Container>
            <IconButton className="swipeButtons swipeButtons__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons swipeButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons swipeButtons__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons swipeButtons__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons swipeButtons__lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </Container>
    )
}

export default SwipeButtons

const Container = styled.div`
    display: flex;
    position: fixed;
    bottom: 2vh;
    width: 100%;
    justify-content: space-evenly;

    .swipeButtons .MuiIconButton-root {
        background-color: white;
        padding: 3wv !important;
        box-shadow: 0px 10px 53px 0px rgba(0, 0, 0, 0.3) !important;
    }

    .swipeButtons__repeat {
        color: #f5b748 !important;
    }

    .swipeButtons__left {
        color: #ec5e6f !important;
    }

    .swipeButtons__star {
        color: #62b4f9 !important;
    }

    .swipeButtons__right {
        color: #76e2b3 !important;
    }

    .swipeButtons__lightning {
        color: #915dd1 !important;
    }
`
