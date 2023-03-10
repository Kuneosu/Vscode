class Player{
  final String name;
  int age,xp;
  String team;

  Player({
    required this.name,
    required this.age,
    required this.xp,
    required this.team, 
  });
}

void main(){
  var player = Player(
    name : 'kwonsu',
    age : 24,
    xp : 1000,
    team : 'Blue'
  );
  print(player);
}