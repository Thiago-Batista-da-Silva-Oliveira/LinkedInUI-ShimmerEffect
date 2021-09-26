import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars.githubusercontent.com/u/77520434?s=400&u=47e4c03258eff63f6d0c5abc348712a1383dfc89&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Thiago Oliveira</h1>
        <h2>Software Engineer</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
