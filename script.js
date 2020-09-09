rectX = 50;
rectY = 50; 
speedX = 6;
speedY = 3;

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  fill(100, 100, 255);

  // teken een vierkant
  rect(rectX, rectY, 55, 55, 20);


  rectX = rectX + 5; 
  rectY = rectY + 5;

  rectX = rectX = speedX;
  rectY = rectY = speedY;

  if (rectX >=1280 ) {
    speedX = speedX * -1

  if (rectY >= 720 ) {}
  }

}