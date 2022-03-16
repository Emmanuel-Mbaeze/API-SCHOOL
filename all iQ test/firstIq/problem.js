const AllItems = [
    {
    value:30,
    weigth:550
    },
    {
        value:20,
        weigth:300
        },
        {
            value:600,
            weigth:400
            },
            {
                value:200,
                weigth:200
                },
                {
                    value:22,
                    weigth:60
                    },
                    {
                        value:20,
                        weigth:40
                        },
                        {
                            value:10,
                            weigth:30
                            },
                            {
                                value:18,
                                weigth:50
                                },
                                {
                                    value:15,
                                    weigth:150
                                    },
                                    {
                                        value:12,
                                        weigth:10
                                        }
                                        
]
const bag= {
    weight:200,
    items:[]
}
const fillbag = ()=>{
    for(let i=0; i<AllItems.length;){
        let newItems = AllItems[i]
        // console.log(newItems);
        let itemVal = AllItems[i].value
        let itemweight= AllItems[i].weigth
        if(itemweight<= bag.weight){
            let bagitemsweight = 0
            for(let j=0; j<bag.items.length; j++){
                bagitemsweight +=bag.items[j].weight
            }
            console.log(bagitemsweight);
            let newbagweight = bagitemsweight + itemweight
            if(newbagweight <= bag.weight){
                bag.items.push(newItems)             
            }
        }
        i++;
    }
    return console.log(bag)
}
fillbag();