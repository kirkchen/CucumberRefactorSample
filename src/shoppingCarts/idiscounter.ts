interface IDiscounter {
    Calculate(price: number, qty: number): number;
}

export default IDiscounter;