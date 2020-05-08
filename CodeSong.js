var friends = ["jhon", "bob", "david", "jerry", "morty"];
for(var i=0;i<friends.length;i++){
    

    for (j = 99; j >= 0; j--) {
        

        var lowerNumber = [j] - 1;
        console.log(friends[i] + ": " + [j] + " lines of code on the wall " + [j] + " lines of code; " + friends[i] +  " strikes one out, clears it all out, " +
            lowerNumber + " lines of code in the file");
    }
}