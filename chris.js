function printFormPattern(rows) {
    for (let i = 1; i <= rows; i++) {
       
        process.stdout.write(" ".repeat(2 * (rows - i)));

       
        for (let j = 1; j <= i; j++) {
            process.stdout.write("*   ");
        }
        console.log();
    }
}

const numRows = 6;
printFormPattern(numRows);
