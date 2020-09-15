function fibonacci(num){
    let a = 1, b = 0, temp;

    let interval = setInterval(function(){
        console.log(b);
        temp = a;
        a = a + b;
        b = temp;
        if(b>num)
            clearInterval(interval);
    },100);
};

fibonacci(100);

function Even(arrays){
  let evenarray=[];
  for(let array in arrays){
      evenarray.push(arrays[array].filter(x=>x%2==0));
  }
    return evenarray;
};

console.log(Even([[9,6,4],[3,2,1]]));





