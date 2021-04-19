let tony={
    name: "Tony",
    Lastname: "Stark",
    friends:["Steve",'Bruce',"Peter"],
    age:45,
    isAvenger:true,
    abc:undefined,
    adress:{
        state:"New York",
        city:"Long Island",
    },
    saysHi: function fn()
    {
        console.log("Iron Man says Hello");
        return "Part of the journey is the end"

    },
}
console.log(tony);
// 2 ways to acess data or data
//1
console.log(tony.name);
console.log(tony.Lastname);
console.log(tony.friends);
console.log(tony.friends[1]);
console.log(tony.adress);
console.log(tony.adress.city);
console.log(tony.saysHi());
//2
console.log(tony["Lastname"]);
console.log(tony["friends"][1]);
console.log(tony["isAvenger"]);
console.log(tony["saysHi"]());
console.log(tony["adress"]["city"]);
//2 ways of acessing keys in objects
let karr = Object.keys(tony);
console.log(karr);
 for(let k in tony)
 {
     console.log(tony[k]);
 }
for(let i=0;i<karr.length;i++)
{
     let key = karr[i];
     console.log(key);
    console.log(tony[karr[i]]);
}
