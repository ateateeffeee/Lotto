function getNumbers(){
    let numbers = [];
    let numbersString = '';
    
    /*for (i = 0; i < 5; i++){
        numbers[i] = Math.floor((Math.random() * 70) + 1);
        if (numbers.includes(numbers[i])) {
            i--;
        }

    }*/

    while(numbers.length < 5){
        let n = Math.floor(Math.random() * 70) + 1;
        if(numbers.indexOf(n) === -1) numbers.push(n);
    }

    numbers.sort(function(a,b){
        return a -b;
    })

    numbers[5] = Math.floor((Math.random() * 25) + 1);

    numbersString = numbers.join(', ');

    alert(numbersString);
}