import React from 'react';
import { Link } from 'react-router-dom';
//styles
import {Wrapper, Content, LogoImg, TMDBLogoImg} from './Header.styles';

//images 
import RMDBLogo from '../../images/MOOGLE.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/">
            <LogoImg src={RMDBLogo} alt="rmdb_logo"/>
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt="tmdb_logo"/>
        </Content>
    </Wrapper>
);

export default Header;