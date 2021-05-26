const a = 0.00228775;
const b = 1.40732;

const calculateScore = (distance: number) => {
    const output = a * (Math.pow(distance, b));
    return 1000 - output;
}

export default calculateScore;