import React, {Component} from 'react';
import styled from 'styled-components';
import MenuModal from './MenuModal';
import {destination} from '../utilities/utilities';

const MenuContainer = styled.div`
      
      
  .menu-button {
    width: 50%;
  }
  
  .menu-button.directions {
    width: 100%;
  }
  
  @media (min-width: 750px) {
    flex-grow: 1;
    flex-basis: 50%;
    
    display: flex;
    align-items: center;
    
    .button-container {
      width: 100%;
    }
  }
`;

class Menus extends Component {
  state = {
    showMenu: false,
    menuType: ''
  };

  displayMenu = (menuType) => {
    this.setState({showMenu: !this.state.showMenu, menuType})
  };

  render() {
    const {list} = this.props;

    return (
      <MenuContainer>
        <div className="button-container">
          <button
            className="menu-button"
            onClick={e => this.displayMenu('House')}
          >
            Menu
          </button>
          <button
            className="menu-button"
            onClick={e => this.displayMenu('Catering')}
          >
            Catering
          </button>
          <button
            className="menu-button directions"
            onClick={e => window.open(destination(list.address, list.city, list.state, list.zip))}
          >
            Directions
          </button>
        </div>

        {this.state.showMenu && <MenuModal list={list} menuType={this.state.menuType} displayMenu={this.displayMenu}/>}

      </MenuContainer>
    );
  }
}

export default Menus;