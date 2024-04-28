//Print the board before each turn
// return a formated string
function printBoard(board) {
    // Create string to store output
    var output = '';
    console.log(board);
    
    // Loop through each row
    for (row = 0; row < 3; row++) {
        // Print X, O, or Space
        console.log(row*3 + space)
        output += board[row * 3 + space];
        
        // Print a | between (if not at the end)
        if (space < 2) 
            output += '|';
    }
    
    // Print a newline at the end 
    output += '\n';
    
     // horizontal line between rows if not at the last row.
     if (row < 2) 
         output += '-----\n';

      return output;
}