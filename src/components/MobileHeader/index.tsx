import React from 'react';

 import { Container,ProfileCircle,SearchInput,MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
      <Container>
          <ProfileCircle src="https://avatars.githubusercontent.com/u/77520434?s=400&u=47e4c03258eff63f6d0c5abc348712a1383dfc89&v=4" />
          <SearchInput placeholder ="Pesquisar" />
          <MessageIcon />
      </Container>
  );
}

export default MobileHeader;