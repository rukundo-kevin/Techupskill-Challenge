//function that return an object with three methods, add, remove and getList.
// add(item) - adds an item to the inventory
// remove(item) - removes an item from the inventory
// getList() - returns an array of all the items in the inventory
function inventoryList(){
    return inventory = {
        items: [],
        add: function(item){
            this.items.push(item);
        },
        remove: function(item){
            let index = this.items.indexOf(item);
            if(index > -1){
                this.items.splice(index, 1);
            }
        },
        getList: function(){
            return this.items;
        }

    };
}
