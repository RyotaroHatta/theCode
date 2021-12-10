function determineWinning(userBet) {
    var randomWord = ["Cherries", "Oranges", "Plums", "Bells", "Melons", "Bars"];
    var symbol1 = randomWord[Math.floor(Math.random()*randomWord.length)];
    var symbol2 = randomWord[Math.floor(Math.random()*randomWord.length)];
    var symbol3 = randomWord[Math.floor(Math.random()*randomWord.length)];
    document.write(symbol1 + " "+ symbol2 + " " + symbol3);
    if(symbol1 === symbol2 && symbol1 === symbol3) {
        tripleBet = userBet * 3;
        document.write("<br>You won $" + tripleBet);
    } else if(symbol1 === symbol2 || symbol1 === symbol3 || symbol2 === symbol3){
        doubleBet = userBet * 2;
        document.write("<br>You won $" + doubleBet);
    } else{
        document.write("<br>You won nothing");
    }
}
var bet = Number(prompt("Enter your bet"));
var tripleBet, doubleBet;

determineWinning(bet);
