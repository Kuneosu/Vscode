Math.floor(Math.random()*100000)
// 99415
String(Math.floor(Math.random()*100000))
// '58881'

String(Math.floor(Math.random()*100000)).padStart(5,"0")
// '37271'
String(Math.floor(Math.random()*100000)).padStart(5,"0")
// '00523'

let result = String(Math.floor(Math.random()*100000)).padStart(5,"0")
// undefined
result
// '55422'
result
// '55422'