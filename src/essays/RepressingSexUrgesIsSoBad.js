import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
    clear: true,
    text: 'Repressing sex urges is so bad. Poison dams up inside and then it must come out.',
    interval: 140
},{
    delay: 1500,
    clear: true,
    text: ' When sex is held back too long it comes out fast and wild. It can do a lot of harm.',
    interval: 140
},{
    delay: 1500,
    clear: true,
    text: ' Innocent people get shot or cut by confused sex urges. They don\'t know what hit them until too late.',
    interval: 140
},{
    delay: 1500,
    clear: true,
    text: ' Parents should let children express themselves so they don\'t get mean early.',
    interval: 140
},{
    delay: 1500,
    clear: true,
    text: ' Adults should make sure they find many outlets.',
    interval: 140
},{
    delay: 1500,
    clear: true,
    text: ' All people should respond to big sex needs. Don\'t make fun of individuals and send them away.',
    interval: 140
},{
    delay: 1500,
    clear: true,
    text: ' It\'s better to volunteer than to get forcred.',
    interval: 140
},{
    delay: 5000,
    clear: true,
    text: '',
    interval: 140
}];

export const essay = {
    name: "Repressing sex urges is so bad",
    color: hsl(80,35,55),
    textComponents: textComponents
};

export default essay;