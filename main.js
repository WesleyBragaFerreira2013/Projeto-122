function setup() {
    canvas = createCanvas(450, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function preload() {

}

function draw() {
    image(video, 0, 0, 640, 480);

    fill(114, 63, 20);
    stroke(255, 255, 0);
    strokeWeight(10);
    circle(450, 0, 100);

    fill(114, 63, 20);
    stroke(255, 255, 0);
    strokeWeight(10);
    circle(450, 300, 100);

    fill(114, 63, 20);
    stroke(255, 255, 0);
    strokeWeight(10);
    circle(0, 300, 100);

    fill(114, 63, 20);
    stroke(255, 255, 0);
    strokeWeight(10);
    circle(0, 0, 100);

    rect(430, 45, 30, 210);
    rect(-10, 45, 30, 210);
    rect(45, -10, 360, 30);
    rect(45, 280, 360, 30);
}

function takeSnapshot() {
    save("foto.png");
}