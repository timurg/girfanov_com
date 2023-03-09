var app = app = new PIXI.Application(document.body.clientWidth, window.innerHeight, {
    backgroundColor: 0xffffff,
});

app.stop();

document.body.appendChild(app.view);

const pac01 = PIXI.Sprite.from('/img/pac01.png');
app.stage.addChild(pac01);

pac01.anchor.set(0.5);
//pac01.tint = Math.random() * 0xFFFFFF;

pac01.speedY= 1;
pac01.speedX = 0;

let text = new PIXI.Text('timur girfanov',{fontFamily : 'Pixel Times', fontSize: 54, fill : 0xFFFFFF, align : 'center'});
app.stage.addChild(text);
text.anchor.set(0.5);

app.ticker.add(() => {

    let pac01Bounds = pac01.getBounds();

    let hW = pac01Bounds.width / 2;
    let hH =  pac01Bounds.height / 2;

    if ((pac01.x + hW) > app.screen.width){
        pac01.speedX = -1;
    }

    if ((pac01.y + hH) > app.screen.height){
        pac01.speedY = -1;
    }

    if ((pac01.x - hW) < 0){
        pac01.speedX = 1;
    }

    if ((pac01.y - hH) < 0){
        pac01.speedY = 1;
    }

    pac01.x += pac01.speedX * pac01.scale.x * 20;
    pac01.y += pac01.speedY * pac01.scale.y * 20;
});

window.addEventListener("load", function() {
    //app = new PIXI.Application(document.body.clientWidth, document.documentElement.scrollHeight, {
    //    backgroundColor: 0xffffff,
    //});
    //
    app.renderer.resize(document.body.clientWidth, window.innerHeight - 5);
    pac01.x = app.screen.width / 2;
    pac01.y = app.screen.height / 2;
    var scaleFactor = 0.1;
    pac01.scale.set(scaleFactor);

    text.x = app.screen.width / 2;
    text.y = app.screen.height / 2;

    app.start();

});
window.addEventListener("resize", function() {
    app.renderer.resize(document.body.clientWidth, window.innerHeight - 5);

    pac01.x = app.screen.width / 2;
    pac01.y = app.screen.height / 2;
});