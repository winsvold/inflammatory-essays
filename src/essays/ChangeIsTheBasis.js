import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'Change is the basis of all history, the proof of vigor.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' The old is soiled and disgusting by nature. Stale food is repellent, monogamous love breeds contempt, senility cripples the government that is too powerful too long.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Upheaval is desirable because fresh, untainted groups seize oppurtunity. Violent overthrow is appropriate when the situation is intolerable.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Slow modification can be effective; men change before they notice and resist. The decadent and the powerful champion continuity.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' "Nothing essential changes."',
        interval: 140
},{
    delay: 3000,
        clear: false,
        text: ' That is a myth. It will be refuted. The necessary birth convulsions will be triggered.',
        interval: 150
},{
    delay: 3000,
        clear: true,
        text: ' Action will bring the evidence to your doorstep.',
        interval: 140
},{
    delay: 6000,
        clear: true,
        text: '',
        interval: 140
}];

export const essay = {
    name: "Change is the basis",
    color: hsl(290,20,50),
    textComponents: textComponents
};

export default essay;