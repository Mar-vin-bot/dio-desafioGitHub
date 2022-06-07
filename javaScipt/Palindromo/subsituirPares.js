function substitutePares (array) {

    for (var i = 0; i < array.length; i++) {
        if(array[i] === 0){
            console.log("voce ja é 0")
        }else if (array[i] % 2 === 0) {
            console.log(`susbstituindo valor anterior ${array[i]} por 0`)
                array[i] = 0;
            }
        }
        return array;
    }


    let arr = [];

    console.log(substitutePares(arr));



