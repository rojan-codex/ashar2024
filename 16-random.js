age = [10,20,30,40,50]
religious = ["newar","brahmin","chettri","magar","tharu"]
names = ["rojan","sudip","maria","akriti","swekshya"]

let randomAgeIndex = Math.floor(Math.random() * age.length)
let randomReligiousIndex = Math.floor(Math.random() * religious.length)
let randomNamesIndex = Math.floor(Math.random() * names.length)

let user = {
    age : age[randomAgeIndex],
    religious : religious[randomReligiousIndex],
    names : names[randomNamesIndex]
}

console.log(user)

