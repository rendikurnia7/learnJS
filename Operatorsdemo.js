let x=10, y=20;

//Aritmatika Operator + - / % **

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x%y);
console.log(x/y);
console.log(5**2);

//x=x+1;
//x++;  //postincrement
++x; //pre-increment
console.log(x);

//y=y-1;
//y--; //post-decrement
--y; //pre-decrement
console.log(y);

//Assigment Operators

x=100;
y=50;
console.log(x);

x+=y; // x=x+y
console.log(x);

console.log(x-=y); //x=x-y
console.log(x*=y); //x=x*y
console.log(x/=y); //x=x/y
console.log(x%=y); //x=x%y


//Relational / Comparison Operators
//Always return a boolean value true/false
// < > <= >= !=

x=10;
y=20;

console.log(x>y); //false
console.log(x<y); //True
console.log(x>=y); //false
console.log(x<=y); //True
console.log(x==y); //false


//ternary operators
console.log(x<y?x:y); //return x value 10
console.log(x>y?x:y); //return y value 20

//logical operator
// && || !

let a=true;
let b=false;

console.log(a && b); //false
console.log(a || b); //true
console.log(!a); //false

