let todos = [
    {
        title: "html",
        status: true,
    },
    {
        title: "css",
        status: true,
    },
    {
        title: "js",
        status: false,
    },
    {
        title: "react",
        status: false,
    }

]



/* 
    html is completed
    css is completed
    js is incompleted
*/
// for (i = 0; i < todos.length; i++) {
//     if (todos[i].status === true) {
//         console.log(`${todos[i].title} is completed`)
        
//     } else {
//         console.log(`${todos[i].title} is not complete`)
        
//     }
// }

// let completedTodos = []
// let incompletedTodos = []

// todos.forEach((todos) => {
//     if (todos.status) {
//         console.log(`${todos.title} is completed`)
//         completedTodos.push(todos)
//     }
//     else {
//         console.log(`${todos.title} is incompleted`)
//         incompletedTodos.push(todos)
//     }
// }
// )

/* ternary operator */

// console.log(completedTodos)
// console.log(incompletedTodos)

let  numbers = [1,2,3,4,5,6,7,8,9,10]

evenNumbers = numbers.filter((numbers) => {
    if(numbers % 2 == 0){
        return true
    }
})

oddNumbers = numbers.filter((numbers) => {
    if(numbers % 2 !== 0){
        return true
    }
})

console.log(evenNumbers)
console.log(oddNumbers)




