/* implement a calculator */
calculator = {
    add: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }

};

fibonacci = {
    fibonacci: function(n) {
        if (n < 2) {
            return n;
        }
        return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
}


