var canvas = new fabric.Canvas('myCanvas')

player_x =10;
player_y=10;

hero_width=30;
hero_height=30;

var player_object = "";
var hero = "";


function player_update()
{
    fabric.Image.fromURL("wolverine.jpg", function(Img){
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x,
 
    });
    canvas.add(player_object);
    });

    function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
     hero = Img;
     hero.scaleToWidth(hero_width);
     hero.scaleToHeight(hero_height);
     hero.set({
    top:player_y,
    left:player_x,
     });
     canvas.add(hero);
    });
}
}
