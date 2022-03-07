class Form {
  constructor() {
    
    this.input = createInput("").attribute("Placeholder","Enter your name:");
    this.playButton = createButton("Play!");
    this.titleImg = createImg("./assets/title.png","gameTitle");
    this.greeting = createElement("h2");

  }
  setElementsPosition(){

    this.titleImg.position(120,30);
    this.input.position(width/2 - 110, height/2 - 80);
    this.playButton.position(width/2 - 90, height/2 - 20);
    this.greeting.position(width/2 - 300, height/2 - 100);

  }
  display(){

    this.setElementsPosition();
    this.handleMousePressed();

  }
  hide(){

    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();

  }
  handleMousePressed(){

    this.playButton.mousePressed(()=>{
      this.playButton.hide();
      this.input.hide();
      let message = `
      Hello. 
      ${this.input.value()}
      </br> Wait for another player to join.`;
      this.greeting.html(message)
    });

  }
}
