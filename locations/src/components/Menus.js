import React, {Component} from 'react'
import MenuModal from './MenuModal'
import {destination} from '../utilities/utilities'
import {MenuContainer, MenuButton} from './StyledMenus'

class Menus extends Component {
  state = {
    showMenu: false,
    menuType: ''
  }

  render() {

    const {list} = this.props;

    return (
      <MenuContainer>
        <MenuButton
          onClick={e => this.displayMenu('house')}
        >Menu</MenuButton>
        <MenuButton
          onClick={e => this.displayMenu('catering')}
        >Catering Menu</MenuButton>
        <MenuButton directions
                    onClick={e => window.open(destination(list.address, list.city, list.state, list.zip))}>
          Directions
        </MenuButton>

        {this.state.showMenu && <MenuModal list={list} menuType={this.state.menuType}/>}

      </MenuContainer>
    )
  }

  displayMenu = (menuType) => {
    this.setState({showMenu: !this.state.showMenu, menuType})
  }


}


export default Menus