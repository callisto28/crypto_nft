import React, { useEffect, useState } from 'react';


const BASE_URL1 = `http://api.exchangeratesapi.io/v1/latest?access_key=${process.env.API_CONVERT}`



function Convert() {


    const [fromCurrency, setFromCurrency] = useState(['Select'])
    const [toCurrency, setToCurrency] = useState()
    const [exchangeRate, setExchangeRate] = useState()
    const [amount, setAmount] = useState(0)
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

    let toAmount, fromAmount
    if (amountInFromCurrency) {
        fromAmount = amount
        toAmount = amount * exchangeRate
    } else {
        toAmount = amount
        fromAmount = amount / exchangeRate
    }


    useEffect(() => {
        fetch(`${BASE_URL1}`)
            .then(res => res.json())
            .then(data => {
                const exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency]
                console.log(exchangeRate, 'exchange');
                setExchangeRate(exchangeRate)
            })
    }, [fromCurrency, toCurrency])


    function handleFromAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(true)
    }

    function handleToAmountChange(e) {
        setAmount(e.target.value)
        setAmountInFromCurrency(false)
    }

    return (
        <>

            <h1 className="text-white">Convert</h1>
            <div className="flex flex-col">
                <CurrencyRow
                    currencyOptions={['Select', 'EUR', 'USD', 'BTC']}
                    selectedCurrency={fromCurrency}
                    onChangeCurrency={e => setFromCurrency(e.target.value)}
                    onChangeAmount={handleFromAmountChange}
                    amount={fromAmount}
                />
                <br />
                <div className="text-white">=</div>
                <CurrencyRow
                    currencyOptions={['Select', 'EUR', 'USD', 'BTC']}
                    selectedCurrency={toCurrency}
                    onChangeCurrency={e => setToCurrency(e.target.value)}
                    onChangeAmount={handleToAmountChange}
                    amount={toAmount}
                /></div>
        </>
    );
}


export default Convert;

export function CurrencyRow(props) {
    const {
        currencyOptions = ['BTC', 'EUR', 'USD'],
        selectedCurrency = ['BTC', 'EUR', 'USD'],
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props
    return (
        <div>
            <input type="number" className="input" value={amount.toString()} onChange={onChangeAmount} />
            <select multiple={false} value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}