import hsl from 'hsl-to-hex';

const textComponents = [{
    delay: 3000,
        clear: true,
        text: 'Shriek when the pain hits during interrogation.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Reach into the dark ages to find a sound that is liquid horror, a sound of the brink where man stops and the beast and nameless cruel forces begin.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Scream when your life is threatened.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Form a noise so true that your tormentor recognizes it as a voice that lives in his own throat.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' The true sounds tells him that he cuts his flesh when he cuts yours, that he cannot thrive after he tortures you.',
        interval: 140
},{
    delay: 1500,
        clear: true,
        text: ' Scream that he destroys all kindness in you and blackens every vision you could have shown him.',
        interval: 140
},{
    delay: 7000,
        clear: true,
        text: '',
        interval: 140
}];

export const essay = {
    name: "Shriek when the pain hits",
    color: hsl(45,10,70),
    textComponents: textComponents
};

export default essay;