const whatType = obj => (
    {}.toString
        .call(obj)
        .match(/\s([a-zA-Z]+)/)[1]
        .toLowerCase()
)

console.log(whatType("Thang handsome"))
console.log(whatType(true))
