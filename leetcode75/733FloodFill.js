/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    var rColor = image[sr][sc];

    return replaceColor(image, sr, sc, color, rColor);
};

var replaceColor = function(image, sr, sc, fColor, rColor) {
    if (fColor === rColor || image[sr][sc] !== rColor) return image;

    image[sr][sc] = fColor;

    if (sr > 0) image = replaceColor(image, sr-1, sc, fColor, rColor);
    if (sr < image.length-1) image = replaceColor(image, sr+1, sc, fColor, rColor);

    if (sc > 0) image = replaceColor(image, sr, sc-1, fColor, rColor);
    if (sc < image[0].length-1) image = replaceColor(image, sr, sc+1, fColor, rColor);

    return image;
}

console.log(floodFill(image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2));
console.log(floodFill(image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0));