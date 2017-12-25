import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'Ruin your fucking self before they do.',
        interval: 170
},{
    delay: 2000,
        clear: false,
        text: ' Otherwise they\'ll screw you because you\'re a nobody.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' They\'ll keep you alive, but you\'ll have to crawl and say "thank-you" for every bone they throw.',
        interval: 140
},{
    delay: 1000,
        clear: true,
        text: ' You might as well stay drunk or shoot junk and be a crazy fucker.',
        interval: 140
},{
    delay: 1000,
        clear: true,
        text: ' If the rich guys want to play with you, make them get their hands dirty. Send them away gagging, or sobbing if they\'re soft-hearted.',
        interval: 140
},{
    delay: 1000,
        clear: true,
        text: ' You\'ll be left alone if you\'re frightening, and dead you\'re free!',
        interval: 140
},{
    delay: 1000,
        clear: true,
        text: ' You can change the radiant child in you to a reflection of the shit you were meant to serve.',
        interval: 140
},{
    delay: 6000,
        clear: true,
        text: '',
        interval: 140
}];

export const essay = {
    name: "Ruin Your fucking self",
    color: hsl(60,5,50),
    textComponents: textComponents
};

export default essay;