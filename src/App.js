import './App.css';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import TenderCards from './Components/TenderCards/TenderCards';
import SwipedButtons from './Components/SwipeButtons/SwipeButtons';
import Header from './Components/Header/Header';


function App() {
  return (
   <Container>
     <Helmet>
      <title> Tinder Clone | Dataing, Make Friends & Meet new People</title>
     </Helmet>
     <Header />
     <TenderCards/>
     <SwipedButtons />

   </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`