// const pro =(n)=>{

//     let x =[]
//     let w = ""
//     for (let i = 0; i < n.length; i++) {
//         x.push(n[i]);  
//      }
//     console.log("stack value:",x)
//     for (let i = 0; i < n.length; i++) {
//        w += x.pop();
//     }
//     console.log("stack value:",x)
//     console.log()
//     console.log("stored value:",w)
//     if (n===w) {
//         console.log("palindrome")
//     }else{
//         console.log("not a palindrome")
//     } 
// }
// pro("poop")



class stack{
    constructor(){
      this.storage={} 
      this.count=0 
    }
    push(value){
        this.storage[this.count]=value
        this.count++
    }
    show(){
        return this.storage
    }
    log(){
        let n = this.storage
        let w=[]
        for(let k in n){
            w.push(n[k])
        }
        return w                
    }
}
const newStack = new stack()
newstack.push(12)
newstack.push(51)
console.log(newstack.show())
console.log(newstack.log())