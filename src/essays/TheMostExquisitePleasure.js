import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'The most exquisite pleasure is domination. Nothing can compare with the feeling.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' The mental sensations are even better than the physical ones. Knowing you have power has to be the biggest high, the greates comfort. It is complete security, protection from hurt.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' When you dominate somebody you\'re doing him a favor.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' He prays someone will control him, take his mind off his troubles.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' You\'re helping him while helping yourself. Even when you get mean he likes it.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Sometimes he\'s angry and fights back but you can handle it. He always remembers what he needs.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' You always get what you want.',
        interval: 140
},{
    delay: 6000,
        clear: true,
        text: '',
        interval: 140
}];

export const essay = {
    name: "The most exquisite pleasure",
    color: hsl(25,60,53),
    textComponents: textComponents
};

export default essay;