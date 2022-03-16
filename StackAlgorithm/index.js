// const StackMethod =(n)=>{
//     const Stack =[]
// const Value = n
// let Review = ""
// for(let i=0;i<Value.length;i++){
//     Stack.push(Value[i])
// }
// console.log(Stack);
// for(let n=0;n<Value.length;n++){
//     Review +=Stack.pop()
   
// }
// console.log(Review);
// }
// StackMethod("PETER")

// class Stack{
//     constructor(){
//         this.storage={}
//         this.count=0
//     }
//     add(value){
//         this.storage[this.count]=value;
//         this.count++
//     }
//     print(){
//         return this.storage
//     }
//     log(){
//         let data = this.storage
//         let loggie = []
//         for(let k in data){
//         loggie.push(data[k])
//         }
//         return loggie
//     }
//     size(){
//         return this.count
//     }
//     peak(){
//         return this.storage[this.count-1]
//     }
//     pop(){
//         if(this.count ===0){
//             return null
//         }
//         this.count--
//         return this.storage[this.count]
//     }
// }
// const stack = new Stack()
// stack.add("peter")
// stack.add("mike")
// stack.add("manel")
// stack.add("dera")
// stack.add("leke")
// stack.pop()
// stack.pop()
           

// console.log(stack.pop());

// const Queue = (n)=>{
//     let names = []
// let newName = n.toUpperCase()
// let checkName=""
// for(let i=0;i<newName.length;i++){
//     names.push(newName[i])
// }
// console.log(names);
// for(let i=0;i<newName.length;i++){
//     checkName += names.shift()
// }
// console.log(checkName);
// }
// Queue("Manel")

// class Queue{
//     constructor(){
//         this.storage={}
//         this.count=0
//     }
//         add(value){
//                     this.storage[this.count]=value;
//                     this.count++
//                 }
// }

// const queue = new Queue()
// queue.add("peter")


class welcome{
    constructor(){
   this.storage={}
   this.count=0
    }
    push(value){
        this.storage[this.count]=value;
        this.count++
    }
    push2(value){
        let data =  this.storage
        data.push(value)
    }
    size(){
        
    }
}
const  welcome = new welcome()
welcome.add("mike")