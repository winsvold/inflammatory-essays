import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'A cruel but ancient law demands an eye for an eye.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Murder must be answered by execution.',
        interval: 140
},{
    delay: 2000,
        clear: false,
        text: ' Only god has the right to take a life and when someone breaks this law he will be punished.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Justice must come swiftly. It doesn\'t help anyone to stall.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' The victim\'s family cries out for satisfaction, the community begs for protection and the departed craves vengeance so he can rest.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' The killer knew in advance there was no excuse for his act, truly he has taken his own life.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' He, not society, is responsible for his fate.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' He alone stands guilty and damned.',
        interval: 140
},{
    delay: 6000,
        clear: true,
        text: '',
        interval: 140
}];

export const essay = {
    name: "A cruel but ancient law",
    color: hsl(0,85,60),
    textComponents: textComponents
};

export default essay;