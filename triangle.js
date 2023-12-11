const numRows = 8;

for (let i = 0; i < numRows; i++) {
    let row = '';

  
    for (let j = 0; j < numRows - i - 1; j++) {
        row += '  ';
    }

    
    for (let k = 0; k <= i; k++) {
        row += '* ';
    }

    console.log(row);
}
