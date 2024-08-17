

function calculatesum(number1,number2){
    
let sum = number1 + number2
console.log(number1, "+", number2, "=", number1 + number2)
}

calculatesum(100,2);
calculatesum(123,123);

function calculatesum(firstnumber,secondnumber){
    
    let sum = firstnumber + secondnumber
    console.log(`${firstnumber} + ${secondnumber} = ${firstnumber + secondnumber}`)
    }
calculatesum(1,2,3,4,5,6,7,8);






function double(input){
    console.log("5 x",input,"=",5 * input)
    console.log(`5 x ${input} =`,5 * input)

}
double(10);

let fruitsData = [
    {
      name: "kiwi",
      scientificName: "k-wrong-xyz",
      price: 100,
    },
    {
      name: "orange",
      scientificName: "k-xyz",
      price: 50,
    },
    {
      name: "apple",
      scientificName: "k-xyz",
      price: 50,
    },
  ]
  
  // console.log("the price of ",fruitsData[0].name, " is ", fruitsData[0].price)
  // console.log("the price of ", fruitsData[1].name, " is ", fruitsData[1].price)
  // console.log("the price of ", fruitsData[2].name, " is ", fruitsData[2].price)

//   function fruitsData1(name, scname, price){
    
//     console.log(`Fruit=${name}, scname=${scname}, price=${price}`)   
// }

// fruitsData1("kiwi", "xyz", 100)
// fruitsData1("orange", "xy", 50)
// fruitsData1("apple", "xyz", 50)
//object destrucing
function fruitrate(fruit){
  let {name,price,scientificName}= fruit
  console.log(`the price of ${name} is ${price} and its sname is ${scientificName}`)
}


fruitrate(fruitsData[0]);
fruitrate(fruitsData[1]);
fruitrate(fruitsData[2]);



