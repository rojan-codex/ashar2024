let users = [
    {
        name: "ram",
        haspaidstatus: false,
        hasscholarship: true

    },
    {
        name: "hari",
        haspaidstatus: true,
        hasscholarship: false

    },
    {
        name: "sita",
        haspaidstatus: false,
        hasscholarship: false

    }

]

for (index =0; index <=users.length; index++ )
{
    if (users[index].haspaidstatus === true || users[index].hasscholarship === true )
{
    console.log(`${users[index].name} can give exam`)
}
else
{
    console.log(`${users[index].name} cannot give exam`)
}
}




// research on
// ternary operator
