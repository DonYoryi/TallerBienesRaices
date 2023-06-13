import React from 'react'
import { ThemeProvider} from '@mui/material/styles';
import { ChildrenContainer, Container, ImgContainer, TitleContainer, Tittle, Wrapper } from './styles';
import globalTheme from '../../../config/MaterialTheme/materialThema.config';

const fullLogo = require('../../../assets/imgs/fullLogo.png');
interface Props {

    children?: JSX.Element | JSX.Element[];
}

const BasicLayout = ({ children }: Props) => {
    return (
        <ThemeProvider
            theme={globalTheme}
        >               
             <ImgContainer>
                <img src={fullLogo} height="100%" />
            </ImgContainer>
            <Wrapper>
                <Container
                    container
                    spacing={{ laptop: 3, mobile: 1, tablet: 3 }}
                    columns={{ mobile: 4, tablet: 8, laptop: 12 }}
                >

                    <ChildrenContainer mobile={4} tablet={8} laptop={12}>
                        {children}
                    </ChildrenContainer>
                </Container>
            </Wrapper>
        </ThemeProvider>

    );
}


export default BasicLayout;

