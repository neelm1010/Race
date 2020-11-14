class Game{
    constructor()
    {

    }

    getState()
    {
        console.log("Lets get the game state:")
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
        console.log(gameStateRef)
    }
    update(state)
    {
       database.ref('/').update({
           gameState:state
       });
    }
    async start(){
        if(gameState===0)
        {
            console.log("New player getting created:")
            player=new Player();
            player.getCount();
            console.log("New Form is created:")
            form=new Form();
            form.display();
        }

    car1=createSprite(100,200);
    car2=createSprite(300,200);
    car3=createSprite(500,200);
    car4=createSprite(700,200);
cars=[car1,car2,car3,car4];
car1.addImage("car1",car1Img)
car2.addImage("car2",car2Img)
car3.addImage("car3",car3Img)
car4.addImage("car4",car4Img)
    }
    play()
    {
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);
        Player.getPlayerInfo();
        player.getCarsAtEnd();

        if(allPlayers !== undefined)
        {
            background("#c68767");

            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
             //x and y position of the cars
            var x = 300;
            var y;
           
            for(var plr in allPlayers)
            {
                 //add 1 to the index for every loop
                index = index + 1 ;
                //position the cars a little away from each other in x direction
                x = x + 250;

                //use data form the database to display the cars in y direction
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                stroke(10);
                fill("red");
                ellipse(x,y,60,60)
                    cars[index-1].shapeColor="blue"
                camera.position.x=displayWidth/2
                camera.position.y=cars[index-1].y

                }

              
            }

        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
            player.update();
          
        }
        if(player.distance>5000){
            gameState=2;
            player.rank+=1;
            player.update();
            Player.updateCarsAtEnd(player.rank);
            console.log(gameState);
        }
          drawSprites();
    }
    end()
    {
        camera.position.x =0;
        camera.position.y = 0;
        imageMode(CENTER);
        Player.getPlayerInfo();
        console.log("Game Ended");
        fill("red");
        textAlign(CENTER);
        textSize(50);
        for(var plr in allPlayers)
        {

            if(allPlayers[plr].rank === 1)
            {
                text("1st :  "+allPlayers[plr].name,0,85);
            }
            else if(allPlayers[plr].rank === 2){
                text("2nd: " + allPlayers[plr].name, displayWidth/4, displayHeight/9 + 73);
              }
        }
    }

   
}