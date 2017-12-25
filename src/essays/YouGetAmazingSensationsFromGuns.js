import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'You get amazing sensations from guns.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' You get results from guns.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Man is an aggressive animal; You have to have a good offense and a good defense.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Too many citizens think they are helpless. They leave everything to the authorities and this causes corruption.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Responsibility should go back where it belongs. It is your life so take control and feel vital.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' There may be some accidents along the path to self-expression and self-determination. Some harmless people will be hurt.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' However,',
        interval: 140
},{
    delay: 150,
        clear: false,
        text: ' G-U-N',
        interval: 250
},{
    delay: 300,
        clear: false,
        text: ' spells pride to the strong, safety to the weak and hope to the hopeless.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Guns make wrong right fast.',
        interval: 150
},{
    delay: 6000,
        clear: true,
        text: '',
        interval: 140
}];

export const essay = {
    name: "You get amazing sensations from guns",
    color: hsl(50,20,60),
    textComponents: textComponents
};

export default essay;