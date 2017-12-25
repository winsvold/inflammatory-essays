import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'Food won\'t go down when you know your mother didn\'t want you, never liked to feed you, always hated you in her rooms.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' You were wrong to clutch and swallow and move your mouth.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' You must not be flushed, layered in fat or ripe from meat or she will despise your sight.',
        interval: 140
},{
    delay: 2000,
        clear: true,
        text: ' Your skeleton cries, "I make no demands, I am ashamed of my needs, I am unworthy. I\'m aware of those more desvering, those with prior and urgent claims to food." Skeleton says, "My safety is in slightness, my pride is denial. My victory is no gluttony, no guilt."',
        interval: 140
},{
    delay: 6000,
        clear: true,
        text: '',
        interval: 140
}];

export const essay = {
    name: "What scares peasants",
    color: hsl(110,15,78),
    textComponents: textComponents
};

export default essay;