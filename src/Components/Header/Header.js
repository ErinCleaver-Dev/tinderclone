import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <Container>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <TenderIcon>
                <img src ="https://i.imgur.com/QS3Ma1v.png"></img>
            </TenderIcon>
            <IconButton>
                <ForumIcon/>
            </IconButton>
        </Container>
    )
}

export default Header
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TenderIcon = styled.div`
    img {
        object-fit: contain;
        height: 40px;
    }
`
const Icons = styled("header_icon")`
    height: 20px;
`