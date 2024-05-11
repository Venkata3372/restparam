let sum=function(){
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2]+arguments[3]+arguments[4])
    let sum=0
    for(const a of arguments)
        sum=sum+a
    console.log(sum)
}
sum(1,2,3,4,5)