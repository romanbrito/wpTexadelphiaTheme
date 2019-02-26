import React, {Component} from 'react';
import MenuModal from './MenuModal';
import {destination} from '../utilities/utilities';

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
      <div className="menu-container">
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
          className="menu-button"
          onClick={e => window.open(destination(list.address, list.city, list.state, list.zip))}
        >
          Directions
        </button>

        {this.state.showMenu && <MenuModal list={list} menuType={this.state.menuType} displayMenu={this.displayMenu}/>}

      </div>
    );
  }
}

export default Menus;