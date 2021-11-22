import React, { useEffect, useState } from 'react';
import { CurrencyRow } from '../components/CurrencyRow';
import { convert } from '../lib/api'

export default function Convert({ data }) {


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


    // useEffect(() => {
    //     convert()
    //         .then(data => {
    if (data === undefined) {
        console.log(data, 'dans le if')
    } else {
        const exchangeRate = data.rates[toCurrency] / data.rates[fromCurrency]

        setExchangeRate(exchangeRate)
    }
    //         })
    // },
    [fromCurrency, toCurrency]
    // )

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
            <h2 className="text-white">Convert getStatic</h2>
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


export const getStaticProps = async () => {
    const data = await convert()
    console.log(data, 'data');

    return { props: { data } }
}

