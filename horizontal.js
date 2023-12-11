function printPattern(numAsterisks) {
    
    for (let i = 0; i < numAsterisks; i++) {
        process.stdout.write("* ");
    }
    console.log(); 
}
const numAsterisks = 9;
printPattern(numAsterisks);
