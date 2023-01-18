let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0;
        return {
            next() {
              pre++;
                return {
                    done: false,
                    value: pre
                }
            }
        }
    }
}

for (let n of fibonacci) {
    // truncate the sequence at 1000
    if (n > 100)
        break;
    console.log(n);
}
