import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
    clear: true,
    text: 'Don\'t talk down to me. Don\'t be polite to me. Don\'t try to make me feel nice. Don\'t relax.',
    interval: 140
},{
    delay: 3000,
    clear: true,
    text: ' I\'ll cut the smile off your face.',
    interval: 250
},{
    delay: 4000,
    clear: true,
    text: ' You think I don\'t know what\'s going on.',
    interval: 140
},{
    delay: 2000,
    clear: true,
    text: ' You think I\'m afraid to react.',
    interval: 140
},{
    delay: 2000,
    clear: true,
    text: ' The joke\'s on you.',
    interval: 140
},{
    delay: 3000,
    clear: true,
    text: ' I\'m biding my time, looking for the spot.',
    interval: 140
},{
    delay: 3000,
    clear: true,
    text: ' You think no one can reach you, no one can have what you have.',
    interval: 140
},{
    delay: 2000,
    clear: true,
    text: ' I\'ve been planning while you\'re playing. I\'ve been saving while you\'re spending.',
    interval: 140
},{
    delay: 2000,
    clear: true,
    text: ' The game is almost over so it\'s time you acknowledge me.',
    interval: 140
},{
    delay: 3000,
    clear: true,
    text: ' Do you want to fall not ever knowing who took you?',
    interval: 140
},{
    delay: 6000,
    clear: true,
    text: '',
    interval: 140
}];

export const essay = {
    name: "Dont talk down to me",
    color: hsl(5,10,70),
    textComponents: textComponents
};

export default essay;