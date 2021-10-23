# Testing pseudo code

### 1 
require async fetchOrder(string - type )

test('fetched item should be a array of object containing id, driver, revenue...', () =>{
  return expect(fetchOrders('orders') to be an (array) that contains item like ({id: 1, driver: "Steve Williams, ...})
  
 ### 2
 
require handleAddDriver(object -newdriver)
 
test('new driver should be within allDriver array', () =>{
   return expect(handleAddDriver({name: John", license : "abadn1234"}) to be an (Array) that contains the object with the property {name: john}


### 3

require uniqueDrivers()

test('When there are three orders in the allDrivers array, function uniqueDrivers should return an array with the length of 3', ()=>{
  return expect(uniqueDrivers() to have length of integer value "3")
  
### 4

require driverlessOrder()

test('the list that is returned should not contain any order with driver name' .()=>{
	return expect(driverlessOrder. to be an ('array') that does not contain item like ({driver : Chris Horton})
  
### 5

require nextOrderNumber()

test('the next order in the list should be 7 when the last order was number 6', ()=>{
	return expect(nextOrderNumber(). resolve tobe (integer value of 7))
  
### 6

require editOrder()

test('truthiness of the error variable should evaluate to true when edited order is entered blank ' ,()=>{
	return editOrder(empty input) toBeTruthy (error)
  
 ### 7
 
require startDrag()

test(' order with and object id {id: 2} should return a value of 2 on drag' ,()=>{
	return startDrag({id: 2, driver: "Steve Williams", ...}) to be integer ('2')

  
  
  
