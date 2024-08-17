let user = [
    {
        username:"rojan",
        haspaid: true,
        hasschoolarship: false

    },
    {
        username:"hari",
        haspaid: false,
        hasschoolarship: true

    },
    {
        username:"sudip",
        haspaid: false,
        hasschoolarship: false

    }
    
]

if(user[0].haspaid === true){
    console.log(`${user[0].username} can give exam`)
}
else if(user[0].hasschoolarship === true){
    console.log(`${user[0].username} can give exam`)
}
else{
    console.log(`${user[0].username} cannot give exam`)
}

if(user[1].haspaid === true){
    console.log(`${user[1].username} can give exam`)
}
else if(user[1].hasschoolarship === true){
    console.log(`${user[1].username} can give exam`)
}
else{
    console.log(`${user[1].username} cannot give exam`)
}

if(user[2].haspaid === true){
    console.log(`${user[2].username} can give exam`)
}
else if(user[2].hasschoolarship === true){
    console.log(`${user[2].username} can give exam`)
}
else{
    console.log(`${user[2].username} cannot give exam`)
}


for(i=0; i<user.length;i++){
if(user[i].haspaid === true){
    console.log(`${user[i].username} can give exam`)
}
else if(user[i].hasschoolarship === true){
    console.log(`${user[i].username} can give exam`)
}
else{
    console.log(`${user[i].username} cannot give exam`)
}
}
