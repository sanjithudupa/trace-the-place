const a = 798.6721;
const b = 0.9995;

/*
    x:
        100
        1000
        5000
        8000
        10000
    y:
        500
        300
        200
        100
        1
    reg:
        https://stats.blue/Stats_Suite/exponential_regression_calculator.html
*/

const calculateScore = (distance: number) => {
    if (distance > 10000)
        return 0;
    if (distance < 5)
        return 1500;

    const output = a * (Math.pow(b, distance));
    return Math.round(output);
}

export default calculateScore;