import React, { Component } from 'react';
import './css/app.css';
import SelfWritingConsole from "./modules/selfWritingConsole/SelfWritingConsole";
import ESSAYS from './essays/Essays';
import SideMenu from "./modules/sidemenu/SideMenu";
import sideMenuContent from "./resources/sidemenucontent";

const DONT_RESPECT_LINE_BREAKS = false;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            sideMenuOpen: false,
            currentEssay: {}
        };
    }

    componentWillMount(){
        this.chooseNewEssay();
    }

    toggleSideMenu() {
        this.setState({
            sideMenuOpen: !this.state.sideMenuOpen
        });
    }

    chooseNewEssay() {
        const numberOfEssays = ESSAYS.length;
        const nextEssay = getRandomInt(0,numberOfEssays - 1);
        this.setState({
            currentEssay: ESSAYS[nextEssay]
        });
    }

    render() {
        const color = this.state.currentEssay.color;
        const textComponents = this.state.currentEssay.textComponents;
        if(DONT_RESPECT_LINE_BREAKS)
            textComponents.forEach((component) =>
               component.clear = false);

        return (
            <div className="appContainer">
                <SelfWritingConsole textComponents = {textComponents}
                                    color = {color}
                                    callBack = {
                                        () => setTimeout( () => this.chooseNewEssay(), 2000)
                                    }
                />
                <SideMenu content={sideMenuContent}
                          open={this.state.sideMenuOpen}
                          callback={()=>this.toggleSideMenu()}
                          width={300}
                />
            </div>
        );
    }
}

export default App;
