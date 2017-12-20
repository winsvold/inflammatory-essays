import React from 'react';
import PT from 'prop-types';

function SideMenu({content, open, callback, width}){

    function showMenuButton() {
        return open ? {display: 'none'} : {display: ''};
    }

    function showContent() {
        return open ? {width: width + 'px'} : {width: '0'};
    }

    return(
        <div className="side-menu-container">
            <span className="btn-open-side-menu" style={showMenuButton()}>
                <a href="#" onClick={()=>callback(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                         slick-uniqueid="3"><div xmlns=""><a xmlns="http://www.w3.org/2000/svg"
                                                             id="slick_uniqueid"/></div>
                        <path id="circle"
                              d="m12 2.085c-5.477 0-9.915 4.438-9.915 9.916 0 5.48 4.438 9.92 9.916 9.92 5.48 0 9.92-4.44 9.92-9.913 0-5.477-4.44-9.915-9.913-9.915zm.002 18a8.084 8.084 0 1 1 0 -16.17 8.084 8.084 0 0 1 0 16.17z"/>
                        <path id="info"
                              d="m11 6.16v2.01h2.02v-2.01zm-1.61 3.22v2.01h1.61v4.43h-1.61v2.01h5.23v-2.01h-1.61v-6.44z"/>
                    </svg>
                </a>
            </span>
            <div id="side-menu" className="side-menu" style={showContent()}>
                <div className="content" style={{width: (width - 40) + 'px'}}>
                    {content}
                </div>
                <a href="#" className="btn-close" onClick={()=>callback(false)}>&times;</a>
            </div>
        </div>
    );
}

SideMenu.propTypes = {
    content: PT.string.isRequired,
    open: PT.bool.isRequired,
    callback: PT.func.isRequired,
    width: PT.number
};

SideMenu.defaultProps = {
    width: '250',
}

export default SideMenu;