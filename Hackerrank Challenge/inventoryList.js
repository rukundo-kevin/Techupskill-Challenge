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

    
// a calendar app to make appointments 
// https://www.hackerrank.com/challenges/calendar-app-two/problem

function calendarApp(calendar){
    let appointments = {};
    let add = function(date, name){
        if(!appointments[date]){
            appointments[date] = [];
        }
        appointments[date].push(name);
    };
    let remove = function(date, name){
        if(appointments[date]){
            let index = appointments[date].indexOf(name);
            if(index > -1){
                appointments[date].splice(index, 1);
            }
        }
    };
    let getAppointments = function(date){
        if(appointments[date]){
            return appointments[date].join(', ');
        }
        return 'No appointments';
    };
    for(let item of calendar){
        let [date, name] = item.split(' ');
        add(date, name);
    }
    return {add, remove, getAppointments};
}