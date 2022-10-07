let objectOfArray=
{
    array1:["javaScript","Python","Ruby","Go","languages","isChallging","isRewarding","difficulty","isFun"],
    array2:["javaScript","Python","Ruby","Go"],
    array3:[true,true,7,true],
    showArray()
    {
        this.array1.forEach(function(item){
            console.log(item);
        });
        console.log(this.array2);
        this.array3.forEach(function(item)
        {
            console.log(item);
        });
    }
}
objectOfArray.showArray();