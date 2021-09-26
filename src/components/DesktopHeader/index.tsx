import React from 'react';

import { Container,Wrapper,LinkedInIcon,SearchInput,HomeIcon,NotificationsIcon,ProfileCircle,CaretDownIcon } from './styles';

const DesktopHeader: React.FC = () => {
  return (
      <Container>
           <Wrapper>
               <div className="left">
                  <LinkedInIcon />
                  <SearchInput placeholder = "Pesquisar" />        
               </div>

               <div className="right">
                   <nav>
                       <button className="active">
                           <HomeIcon />
                           <span>Inicion</span>
                       </button>
                       <button >
                           <NotificationsIcon />
                           <span>Notificações</span>
                       </button>
                       <button>
                           <ProfileCircle src="https://avatars.githubusercontent.com/u/77520434?s=400&u=47e4c03258eff63f6d0c5abc348712a1383dfc89&v=4" />
                              <span>Eu <CaretDownIcon /> </span>
                       </button>
                   </nav>
               </div>
           </Wrapper>
      </Container>
  )
}

export default DesktopHeader;