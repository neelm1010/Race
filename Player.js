class Player{
    constructor()
    {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank=0
    }

    getCount()
    {
        console.log("Get the current player count:")
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();})
        console.log(playerCountRef)
    }
    updateCount(count)
    {
       database.ref('/').update({
        playerCount:count
       });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance,
          rank:this.rank
        });
      }
      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })

      }
      deletePlayerAll(){
        var deletePlayers = database.ref('players');
        deletePlayers.remove();
      }
      getCarsAtEnd(){
        var carsAtEndRef=database.ref('CarsAtEnd');
        carsAtEndRef.on("value",(data)=>{
          this.rank=data.val();
        })
      }
      static updateCarsAtEnd(rank)
      {
        database.ref('/').update({CarsAtEnd:rank})
      }
}