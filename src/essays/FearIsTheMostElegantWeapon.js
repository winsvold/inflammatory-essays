import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'Fear is the most elegant weapon, your hands are never messy.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Threatening bodily harm is crude.',
        interval: 140
},{
    delay: 2000,
        clear: false,
        text: ' Work instead on minds and beliefs, play insecurities like a piano.',
        interval: 140
},{
    delay: 3000,
        clear: true,
        text: ' Be creative in approach.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Force anxiety to excruciating levels or gently undermine the public confidence. Panic drives human herds over cliffs; An alternative is terror-induced immobilization.',
        interval: 140
},{
    delay: 3000,
        clear: true,
        text: ' Fear feeds on fear. Put this efficient process in motion.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Manipulation is not limited to people. Economic, social and democratic institutions can be shaken. It will be demonstrated that nothing is safe, sacred or sane.',
        interval: 140
},{
    delay: 3000,
        clear: true,
        text: ' There is no respite from horror.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Absolutes are quicksilver. Results are spectacular.',
        interval: 160
},{
    delay: 10000,
        clear: true,
        text: '',
        interval: 150
}];

export const essay = {
    name: "Fear is the most elegant weapon",
    color: hsl(20,30,60),
    textComponents: textComponents
};

export default essay;