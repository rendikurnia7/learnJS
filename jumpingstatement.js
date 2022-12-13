for(let i=1; i<=10; i++){
    if(i==5)
    break;
    console.log(i);
}

console.log("break");

for(let j=1; j<=10; j++){
    if(j==5 || j==3 || j==8)
    continue;
    console.log(j);
}