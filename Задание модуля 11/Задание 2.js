function isPrime(num) {
    if (num > 1000) {
        return "Данные неверны. Число не должно быть больше 1000.";
    }

    if (num <= 1) {
        return num + " не является простым числом.";
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return num + " не является простым числом.";
        }
    }

    return num + " является простым числом.";
}


