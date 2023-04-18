//You manage a grocery store and need to keep track of the inventory 
//of various items. You will use arrays to store the data and various 
//functions to manipulate and analyze the data. 
//Create an array containing the names of all items in the inventory maximum of 10.
const inventory = ["Salod","mackrel","halibout","trout","ground turkey","bananas","orange","apple","maize","carrots"];
//Create a separate array with the corresponding stock quantities of each item maximum of 10.
quantity = [10,20,30,40,50,60,70,80,90,100]

//Write a function to add a new item to the inventory, updating both arrays.
const invent = ["Salod","mackrel","halibout","trout","ground turkey","bananas","orange","apple","maize","carrots"];
quantity = [10,20,30,40,50,60,70,80,90,100]
function additems(invent,quant){
    invent.push("cauliflower")
    console.log(invent)
    quantity.push(11)
    console.log(quant)
}
additems(invent,quant)
//Write a function to update the stock quantity of an existing item.

//Write a function to calculate the total number of items in the inventory.
function additems(invent){
    invent.forEach(total => { 
        return invent.total()
        
    });
    console.log()
}
additems(invent)

//Write a function to find the item with the lowest stock quantity.
function additems(quant){
    Math.min(quant)
    console.log(quant)
}
additems(quant)




    







