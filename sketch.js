
function draw() {

    fill(cor) ;
    
    for (let contador in circuloX) {
    
    circle(circuloX[contador], circuloY[contador], 50);
    
    circuloX[contador] += random(0, 3);
    
    circuloY[contador] += random(-3, 3);
    
    }
    
    // código do mouseIsPressed suprimido
    
    }
    
    circuloX = [0, 0, 0];
    
    circuloY = [random(height), random(height), random(height)];
    
    for (let contador in circuloX) {
    
    circle(circuloX[contador], circuloY[contador], 50);
    
    circuloX[contador] += random(0, 3);
    
    circuloY[contador] += random(-3, 3);
    
    if(circuloX[contador] >= width){
    
    circuloX[contador] = 0;
    
    circuloY[contador] = random(height);
    
    }
    
    }
    