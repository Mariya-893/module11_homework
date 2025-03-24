function printNumbersInRange(start, end) {
    let current = start;

    const intervalId = setInterval(() => {
        console.log(current);
        current++;

        if (current > end) {
            clearInterval(intervalId);
        }
    }, 1000);
}

