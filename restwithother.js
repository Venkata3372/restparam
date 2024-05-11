let varandarray = (x, y,z, ...values) => {
    
    console.log(x);
    
    console.log(y);
    
    console.log(values);
    var sum=0
    for(const i of values)
        sum=sum+i
    console.log(sum)
  }
  varandarray(1,2,3,1,3,5,7,9);