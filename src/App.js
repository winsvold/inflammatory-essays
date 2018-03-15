import React, { Component } from 'react';
import './css/app.css';
import SelfWritingConsole from "./modules/selfWritingConsole/SelfWritingConsole";
import ESSAYS from './essays/Essays';
import SideMenu from "./modules/sidemenu/SideMenu";
import sideMenuContent from "./resources/sidemenucontent";
import ReactGA from 'react-ga';

const DONT_RESPECT_LINE_BREAKS = false;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class App extends Component {
    constructor(props){
        super(props);
        ReactGA.initialize('UA-111578827-1');
        ReactGA.pageview('Inflammatory Essays');
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
        const nextEssay = ESSAYS[getRandomInt(0,numberOfEssays - 1)];
        console.log(nextEssay.name);
        ReactGA.pageview(nextEssay.name);
        this.setState({
            currentEssay: nextEssay
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
