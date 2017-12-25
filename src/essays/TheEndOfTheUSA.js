import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'The end of the',
        interval: 80
},{
    delay: 200,
        clear: false,
        text: ' U.S.A.',
        interval: 300
},{
    delay: 2500,
        clear: true,
        text: ' All you rich fuckers see the beginning of the end and take what you can while you can.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' You imagine that you will get away, but you\'ve shit in your own bed and you\'re the one to sleep in it.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Why should everyone else stay behind and smell your stinking cowardice?',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Here\'s a message to you - space travel is uncertain and any refuge of yours can be blown of the map.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' There\'s no other place for you to go.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Know that your future is with us so don\'t give us more reasons to hate you.',
        interval: 140
},{
    delay: 6000,
        clear: true,
        text: '',
        interval: 140
}];

export const essay = {
    name: "The end of the U.S.A.",
    color: hsl(0,60,52),
    textComponents: textComponents
};

export default essay;