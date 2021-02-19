class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");    
    }
    hide_details(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        var title = createElement("h2");
        title.html("car racing game");
        title.position(130,0);
        this.input.position(130,50);
        this.button.position(130,150);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            var name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.name = name;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello" + player.name);
            this.greeting.position(150,150);
        })
    }
}