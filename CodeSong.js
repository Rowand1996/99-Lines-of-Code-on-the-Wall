var friends = ["jhon", "bob", "david", "jerry", "morty"];
for(var i=0;i<friends.length;i++){
    

    for (j = 99; j > 0; j--) {
        var word = " lines"
        if(j === 1){
            var word = " line"
        }
        var lowerNumber = [j] - 1;
        var word2 = " lines"
        if(lowerNumber === 1){
            var word2 = " line"
        }
        console.log(friends[i] + ": " + [j] + word + " of code in the file " + [j] + word + " of code; " + friends[i] +  " strikes one out, clears it all out, " +
            lowerNumber +  word2 + " of code in the file");
    }
}