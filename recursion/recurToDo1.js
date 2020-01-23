function rSigma(val){
    if (val > 1){val = Math.floor(val)} else {val = Math.ceil(val)};
    if (val == 1){
        return val
    };
    if (val > 1){
        return val + rSigma(val-1)
    } else {
        return val + rSigma(val+1)
    }
};
function rFact(val){
    val = Math.floor(val);
    if (val <= 1){
        return 1
    };
    return val * rFact(val-1)
};
function floodFill(canvas2D, startXY, newColor){
    origColor = canvas2D[startXY[1]][startXY[0]];
    fill(canvas2D, startXY[0], startXY[1], origColor, newColor);
    return canvas2D
};
function fill(canvas, x, y, origColor, newColor){
    if (
        x < 0 ||
        x >= canvas.length ||
        y < 0 ||
        y >= canvas[0].length ||
        canvas[y][x] != origColor
    ){
        return false
    };
    canvas[y][x] = newColor;
    fill(canvas, x+1, y, origColor, newColor);
    fill(canvas, x-1, y, origColor, newColor);
    fill(canvas, x, y+1, origColor, newColor);
    fill(canvas, x, y-1, origColor, newColor)
};