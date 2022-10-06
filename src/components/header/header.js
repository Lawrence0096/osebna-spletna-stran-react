import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';
import myImg from '../../assets/3.jpg';

const Header = () => (
  <div className="header">
    <div className='header-picture'>
          <div className='hp-text-container'> 
            <p id="n1">Pozdravljeni moje ime je:</p>
            <p id="n2">Lovro Mackošek</p>
            <p id="n3"> Inženir Infromatike, medijski tehnik</p>
          </div>
    </div>
    <div className='personal-info'>
      <img className='cv-img' src={require('../../assets/3.jpg')} alt='img' />
      <p>Inženir Infromatike, medijski tehnik</p>
      <p>IT engineer, Front-end web Developement, Multimedia designer</p>
      <p>Šentjur pri Celju</p>
      <p>lovro.mackosek@gmail.com</p>
      <p>070 346 952</p>
    </div>
  </div>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

