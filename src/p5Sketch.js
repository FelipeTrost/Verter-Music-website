import p5 from "p5";
import "p5/lib/addons/p5.sound";

const p5Sketch = (sketch, imageUrl) => {
    let mySound, fft, spectrum, height, width, img, canvas;
    let pow2 = 1024;
    let ampCutOut = 120
    let w = 20;
    let radius = 80;
    let loaded = false;
    let progress = 0;

    sketch.playSong = songUrl => {
        loaded = false;
        mySound = sketch.loadSound(songUrl,
            () => {
                loaded = true;
                mySound.play();
            },
            f => console.log("er§or: " + f),
            p => {
                progress = p
            }
        );
    }

    sketch.preload = () => img = sketch.loadImage(imageUrl);

    sketch.stop = () => mySound && mySound.pause();

    sketch.mousePressed = () => {
        if (0 < sketch.mouseY < sketch.height && 0 < sketch.mouseX < sketch.width && mySound)
            if (mySound.isPlaying()) mySound.pause();
            else mySound.play();
    }

    sketch.setup = () => {
        canvas = sketch.createCanvas(350, 350);

        //set the parent to div #canvas
        canvas.parent('canvas')

        //set angle to degrees, for an easier circle
        sketch.angleMode(sketch.DEGREES);

        fft = new p5.FFT(0.7, pow2);

        height = sketch.height;
        width = sketch.width;
    }

    sketch.draw = () => {
        sketch.image(img, 0, 0, width, height);


        if (loaded) {
            //dark overlay to see the effect better
            sketch.background('rgba(0,0,0, 0.25)');

            //get frecuencies
            spectrum = fft.analyze();

            //this is so we start drawing from the center
            sketch.translate(width / 2, height / 2);

            for (let i = 1; i < 360 + 1; i += 4) {
                //Offset for the circle
                let r = spectrum[i] * .2
                r = r * ((Math.sqrt(-r + ampCutOut)) / Math.sqrt(ampCutOut)) | 10

                //Starting point for the circle
                let startX = sketch.cos(i) * radius
                let startY = sketch.sin(i) * radius

                //Ending point for the "circle"
                let x = sketch.cos(i) * (r + radius)
                let y = sketch.sin(i) * (r + radius)

                //draw white line
                sketch.stroke(255);
                sketch.line(startX, startY, x, y)
            }
        } else {
            sketch.stroke(255);
            sketch.rect(0, 4 * height / 5, progress * width, 30)
        }
    }

}

export default p5Sketch;