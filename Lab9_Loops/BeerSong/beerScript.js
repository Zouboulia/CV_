function printSong(){
    for (i = 99; i >= 0; i--){
        if( i == 0 ){
            document.getElementById("lyrics").innerHTML += "No more bottles of beer on the wall, no more bottles of beer" + "<br>" + "Go to the store and buy some more, 99 bottles of beer on the wall";
            return; // Adding return here so it doesn't print a line for the zero.
            }
        if (i==1){
            var lyric = "bottle";
            document.getElementById("lyrics").innerHTML += i + " " + lyric + " of beer on the wall," + i + " " + lyric + " of beer. Take one down and pass it around, " + "<br>";
            }
        else {//all other lyrics
            var lyric = "bottles";
            document.getElementById("lyrics").innerHTML += i + " " + lyric + " of beer on the wall, " + i + " " + lyric + " of beer. Take one down and pass it around," + "<br>";
            }
    }
}