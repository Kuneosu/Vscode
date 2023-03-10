void sayHello(String name){
  print("Hello $name nice to meet you!");
}
String sayHello2(String name){
  return "Hello $name nice to meet you!";
}
String sayHello3(String name) => "Hello $name nice to meet you!";

void main(){
  print(sayHello3('kwonsu'));
}