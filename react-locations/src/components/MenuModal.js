import React from 'react';
import {FiPrinter} from 'react-icons/fi';

const MenuModal = ({list, menuType, displayMenu}) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h1>{list.name} {menuType} Menu</h1>
          <a href={`https://www.texadelphia.com/wp-content/themes/texsite/pdf/${menuType}_${list.label}.pdf`} target="_blank" rel="noopener noreferrer"><FiPrinter/></a>
          <button
            className="close"
            onClick={displayMenu}
          >close
          </button>
        </div>
        <div className="modal-body">
          {

            menuType === 'House' ?
              list.houseMenuUrl.map(url =>
                <img key={url} src={`https://www.texadelphia.com/wp-content/themes/texsite/images/${url}.jpg`}
                     alt="menu"
                     width="100%"/>
              )
              :
              list.cateringMenuUrl.map(url =>
                <img key={url} src={`https://www.texadelphia.com/wp-content/themes/texsite/images/${url}.jpg`}
                     alt="menu"
                     width="100%"/>
              )
          }
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
