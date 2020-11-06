class Form {
constructor() {


}
display(){
    var title= createElement('h2')
    title.html("Car Racing Game")
    title.position(450, 50)
    var input=createInput("name")
    input.position(450, 200)
    var button= createButton("play")
    button.position(450, 250)
    
}
}