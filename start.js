// creating a class
class lucia{
    constructor(FirstName,LastName){
        this.FirstName =FirstName;
        this.LastName = LastName;
    }
}




const model = (n)=>{
const xx = [];
const x = n.split('');
console.log(x);
for (let s of x){
    xx.push(s.length);
}   1
console.log('This is',xx);
console.log(Math.min(...xx));
};


const models = (n) =>{
    const e = n.replace(/[aeiou]/gi,'');
    console.log(e)
};
models('banana can touch anybody')

