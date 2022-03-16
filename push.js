// 1000 ====> 10,000
//1,000,000

const x = ["Micheal", "Dickson", "Tobi", "Blessing","Precious"]
// x.push("Precious")
//splice(start, delete, value)
let numb = ["2", "5", "0","0", "0","0"]

numb.splice(-3, 0, ",")
// console.log(numb);

const reUser = (cost) => {
let newCost = String(cost).split("")
newCost.splice(-3, 0, ",")

return console.log(newCost.join(""));
}
// reUser(50004)


class LinkList {
    constructor(){
        this.head=null
        this.tail=null
    }

    push(value){
         let Node = {value:value, next:null}

        if(this.tail){
           
            this.tail.next = Node
        }

        this.tail = Node
        if(!this.head){
            this.head = Node
        }
    }

    log(){
        let el = []
        let Node = this.head

        while(Node){
            el.push(Node)
            Node = Node.next
        }
        return el
    }

    header(value){
        let Node = {value: value, next: this.head}

        if(this.head){
            this.head = Node
        }
    }

    delete(value){
        if(!this.head){
            return null
        }

        if(this.head && this.head.value === value){
            this.head = this.head.next
        }

        let Node = this.head

        while(Node.next){
            if(Node.next.value === value){
                Node.next = Node.next.next
            }else{
                Node = Node.next
            }
        }

        if(this.tail.value === value){
            this.tail = Node
        }
    }

}

const list = new LinkList()

list.push("Cynthia")
list.push("Dickson")
list.push("Emmanuel")
list.header("Precious")
list.delete("Emmanuel")

console.log(list.log());