let sum=(...add)=>{
    console.log(add[0])
    console.log(add[1])
    console.log(add[2]+add[3]+add[4])
    let sum=0
    for(const a of add)
        sum=sum+a
    console.log(sum)
}
sum(1,2,3,4,5)