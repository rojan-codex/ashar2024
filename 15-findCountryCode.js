let countries = [
    {
        code: "af",
        name: "Afghanistan",
        path: "afghanistan",
    },
    {
        code: "nr",
        name: "Nauru",
        path: "nauru",
    },
    {
        code: "np",
        name: "Nepal",
        path: "nepal",
    },
    {
        code: "nl",
        name: "Netherlands",
        path: "netherlands",
    },
    {
        code: "an",
        name: "Netherlands Antilles",
        path: "netherlandsantilles",
    },
]

/* 
    find the cods of a specific country 

    TODO: 
    create a function findCountryCode 
    - if i pass arguement "Nepal" to the function it should return me np
    - if i pass arguement "zimbabwe" to the function it should return me zw

*/

/* 

    array functions
    
*/

function findCountryCode(countryName) {
    for (let index = 0; index < countries.length; index++) {
        let element =  countries[index]
        if(element.name.toLowerCase() == countryName.toLowerCase().trim()){
            console.log(`country code for ${countryName.trim()} `,element.code);
            return;
        }
    }
    console.log("invalid");
}

findCountryCode("Nepal")
findCountryCode("nepal")
findCountryCode("  nepal   ")


/* then research on */
// arrow function
// forEach function

// random ethnicity, religion
// cart times
