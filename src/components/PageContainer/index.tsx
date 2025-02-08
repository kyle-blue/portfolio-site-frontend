import React from 'react';
import { RootContainer } from './styles';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { Spacer } from '../utility/Spacer';
import OnLoad from './OnLoad';

export interface PageContainerProps {
    children: JSX.Element[] | JSX.Element;
}

function PageContainer({children}: PageContainerProps): React.ReactElement {
    return(
        <RootContainer >
          <NavBar />
          {children}
          <Spacer />
          <Footer />
          <OnLoad />
        </RootContainer>
    )
}

export default PageContainer