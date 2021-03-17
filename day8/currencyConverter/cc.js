const url = "https://api.exchangeratesapi.io/latest?base="

//es5
/*
function convert(){
    let base = document.getElementById('base').value;
    let out = document.getElementById('out').value;
    let amount = document.getElementById('amount').value;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        var final = data.rates[out]*Number(amount)
        var result = `Converted value of ${amount}${base} is ${final}${out} `;
        document.getElementById('output').innerText=result
    })
    .catch((err) => console.log(err))

}
*/


async function convert(){
    let base = document.getElementById('base').value;
    let out = document.getElementById('out').value;
    let amount = document.getElementById('amount').value;
    let response = await fetch(`${url}${base}`,{method:'GET'})
    let data = await response.json()
    let final = data.rates[out]*Number(amount)
    let result = `Converted value of ${amount}${base} is ${final}${out} `;
    document.getElementById('output').innerText=result
}
