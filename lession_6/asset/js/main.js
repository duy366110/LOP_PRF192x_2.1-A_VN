window.onload = function(event) {

    function calc(a = 0, b = 0) {
        a += 1;
        return a + b;
    }

    function main() {

        let a = 10;
        let b = 30;

        let result = calc(a, b);
        console.log(result);
    }

    main();
}