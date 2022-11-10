let from = document.querySelector('#from')
let to = document.querySelector('#to')
let amount = document.querySelector('.amount')
let resultINP = document.querySelector('.resultINP')
let submit = document.querySelector('button[data-submit]')
let resH2 = document.querySelectorAll('.result')


let symbols = JSON.parse(localStorage.getItem('symbols'))


let myParams = {
    redirect: 'follow',
    headers: {
        "apiKey": "TGCgzIx4lrYPFz1bvQS4bX3QiLBodyDo"
    }
}

const reloadSymbols = (obj, select) => {

    for(let key in  obj) {
        let opt = new Option(key, key)


        select.append(opt)
    }
}

if(symbols) {
    reloadSymbols(symbols, from)
    reloadSymbols(symbols, to)
} else {
    fetch('https://api.apilayer.com/fixer/symbols', myParams)
    .then(res => res.json())
    .then(res => {
        localStorage.setItem('symbols', JSON.stringify(res.symbols))

        reloadSymbols(res.symbols, from)
        reloadSymbols(res.symbols, to)
    })
}


submit.onclick = () => {
    if(amount.value.length > 0) {
        fetch(`https://api.apilayer.com/fixer/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`, myParams) 
            .then(res => res.json())
            .then(res => {
                resH2[0].innerHTML = `${res.query.amount} ${res.query.from}`
                resH2[1].innerHTML = `${res.query.to} ${res.result}`
                resultINP.value = res.result
            })
    }
}