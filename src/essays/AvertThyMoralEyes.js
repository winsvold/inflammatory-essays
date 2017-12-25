import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'Avert thy moral eyes from sights that sear the orbs of men.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Keep thy thoughts from the labyrinthine path that leads from arrogant knowledge to fiery destruction.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Seek not the lightning strike that summons life nor the dark vortex that is death before redemption.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Neither cry aloud nor shake clenched fists at the god whose plan is terrible but perfect.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Conceive no theories, build no stopgaps against the inevitable and the divine.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Instead, love thy wife and tender children, grasp and savor the bounteous earth.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Concern thyself with what was freely given as thy birthright.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Venture more and invite perdition.',
        interval: 140
},{
    delay: 6000,
        clear: true,
        text: '',
        interval: 140
}];

export const essay = {
    name: "Avert thy moral eyes",
    color: hsl(185,45,60),
    textComponents: textComponents
};

export default essay;