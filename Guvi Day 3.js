
function areEqualJSONObjects(obj1, obj2) {
    const str1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const str2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    // Compare the sorted strings for equality
    return str1 === str2;
}

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

if (areEqualJSONObjects(obj1, obj2)) {
    console.log("The JSON objects are equal.");
} else {
    console.log("The JSON objects are not equal.");
}


const URL = "https://restcountries.com/v3.1/all"; 

const myReq = new XMLHttpRequest();

myReq.addEventListener("load", function () {
    if (myReq.status >= 200 && myReq.status < 300) {
        const data = JSON.parse(myReq.responseText);
        data.forEach(function (country) {
           let flag = country.flags[0];
           console.log("Country: " + country.name.common + ", Flag: " + flag);
         });



    } else {
        console.error("Request failed with status: " + myReq.status);
    }
});

myReq.open("GET", URL);
myReq.send();





