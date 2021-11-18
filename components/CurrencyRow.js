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