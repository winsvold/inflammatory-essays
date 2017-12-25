import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'What scares peasants is thinking their bodies will be thrown out in public and left to rot.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' They feel shame - as if it matters what position their legs are in when they\'re dead.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Lucky they\'re superstitious because they\'re easier to manage.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Make an example of 2 or 3 rebels, drop their bodies by a road, get them flat and dry so bones show and the grass wears the clothes.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Shoot the fingers off anyone who comes to collect the remains.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Those bodies stay as a sign of absolute authority.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' If peasants think their souls can\'t rest, so much the better.',
        interval: 140
},{
    delay: 6000,
        clear: true,
        text: '',
        interval: 140
}];

export const essay = {
    name: "What scares peasants",
    color: hsl(55,35,65),
    textComponents: textComponents
};

export default essay;