const Cardinput = () => {

    return (
        <div>
            Name of Cardholder <br />
            <input
                type="text"
                id="name"
            /> <br />

            Card Number <br />
            <input
                type="text"
                id="depositedAmount"
                maxLength={4}
            />-
            <input
                type="text"
                id="depositedAmount"
                maxLength={4}
            />-
            <input
                type="text"
                id="depositedAmount"
                maxLength={4}
            />-
            <input
                type="text"
                id="depositedAmount"
                maxLength={4}
            />

            <br />

            MM/YY <br /> <input maxLength={2} /> / <input maxLength={2} />
            <br />
            CVV  <br /> <input maxLength={3} />
            <br />
            <button>Save</button>
        </div>
    )
}

export default Cardinput    