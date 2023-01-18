let cloud = App.loadSpritesheet("cloud.png",659,400,[0],6);

App.onJoinPlayer.Add(function(){

    Map.putObject(5,5,cloud);
    Map.moveObject(5,5,100,5,34);
})