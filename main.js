/* 2.1 Extend JS Date object with a method daysTo()
    ◦ method  daysTo() returns number of complete days between any pair of dates
    ◦ For example:  d1.daysTo(d2) should return quantity of complete days from d1 to d2
*/
console.log('Task1');

var millisecondsPerDay = 24 * 60 * 60 * 1000;
Date.prototype.msPERDAY = millisecondsPerDay;
// Return quantity quantity of complete days from this to d
// If d less than this - return -1
Date.prototype.daysTo = function (d) {
    return d > this ? Math.floor((d-this)/millisecondsPerDay) : -1;
};

let d1 = new Date(2019,1,15); 
let d2 = new Date(2019,1,30);
let d3 = new Date(2020,1,30, 3, 24, 0);


console.log(d1.daysTo(d2));
console.log(d2.daysTo(d1));
console.log(d1.daysTo(d3));



/*2.2 Develop a program which orders array of sales by amount.
Input: array of objects with the following structure {amount: 10000, quantity: 10}. 
Output: new array of ordered sales with the same structure.
Please note that input shall remain intact.
*/
    console.log('Task2');
	let sales = [
    {amount: 10000, quantity: 10},
    {amount: 70000, quantity: 1},
    {amount: 180000, quantity: 3},
    {amount: 30000, quantity: 5},
    {amount: 250000, quantity: 8}
    ];
    
    let sortedArr = sales.slice().sort(function(a,b){
    if (a.amount > b.amount) {
    	return 1;
    }
    if (a.amount < b.amount) {
    	return -1;
    }
    return 0;    
    });
    
    console.log(sortedArr);  

/*        2.3. Develop a program “Object Projection”. 
Input: any JSON object; prototype object. 
Output: projected object.
Projected object structure shall be intersection of source object 
and prototype object structures. Values of properties in projected object
shall be the same as values of respective properties in source object. */

console.log('Task3');

let src = {
	prop11: {
    	prop21: 21,
        prop22: {
        	prop31: 31,
            prop32: 32
       },
    },
    prop12: 12,
};
prot = {
	prop11: {
    	prop22: {
        	prop32: ""
        }
    },
    prop13: ""
};

let projection = (obj, proj) => {
    let projectedObj = {} 
    for (let key in proj){
        if (obj[key] !== null && typeof obj[key] === 'object' &&
            proj[key] !== null && typeof proj[key] === 'object'){
                projectedObj[key] = projection(obj[key], proj[key]);
        }
        else {
            if (obj.hasOwnProperty(key))
                projectedObj[key] = obj[key];
        }
    }
    return projectedObj;
}

console.log(projection(src,prot));


