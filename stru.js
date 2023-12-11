function structurePattern(rows) {
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*");
        }
        console.log();
    }

  
    console.log();
    for (let i = rows; i > 0; i--) {
        
            process.stdout.write("* ");
    }
}
const numRows = 6;
structurePattern(numRows);
