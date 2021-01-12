class Form{
    constructor(){
        this.input= createInput("Name");
            this.button= createButton("play");
            this.greeting= createElement("h2");
    }
    display(){
        var title= createElement("h1");
        title.html("Car Racing Game");
        title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            player.name= this.input.value();
            pc++;
            player.index= pc; 
            player.update();
            player.updateCount(pc);
            this.greeting.html("welcome"+ player.name);
            this.greeting.position(130,100);
        })
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
}