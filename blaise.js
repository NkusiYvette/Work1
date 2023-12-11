function generatePascalsPyramid(levels) {
    let pyramid = [];

    for (let i = 0; i < levels; i++) {
        let row = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(pyramid[i - 1][j - 1] + pyramid[i - 1][j]);
            }
        }

        pyramid.push(row);
    }

    return pyramid;
}

function displayPascalsPyramid(pyramid) {
    for (let i = 0; i < pyramid.length; i++) {
        let row = pyramid[i].map(num => num.toString().padStart(3, ' ')).join(' ');
        console.log(' '.repeat((pyramid.length - i - 1) * 3) + row);
    }
}

const numLevels = 5;
const pascalsPyramid = generatePascalsPyramid(numLevels);

console.log(`Pascal's Pyramid (up to ${numLevels} levels):`);
displayPascalsPyramid(pascalsPyramid);
