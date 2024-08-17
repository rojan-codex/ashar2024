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
]

/* 
    html is completed
    css is completed
    js is incompleted
*/

for (index = 0; index < todos.length; index++)
{   
    let element = todos[index]
    if (element.status === true)
    {
        console.log(`${element.title} is completed`)
    }else
    {
        console.log(`${element.title} is incompleted`)
    }
    
}

todos.forEach((element) => {
    if (element.status)
    {
        console.log(`${element.title} is completed`)
    }else
    {
        console.log(`${element.title} is incompleted`)
    }

})