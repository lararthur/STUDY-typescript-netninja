// LESSON 8 - Function Basics - https://www.youtube.com/watch?v=jXoSaX_yFh4&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=8

let greet: Function;

greet = () => {
    console.log('hello, again!');
};

const add = (a: number, b: number, c: number | string = 20): void => {
    console.log(a + b);
    console.log(c);
}

add(5, 10, '20');

const minus = (a: number, b: number): number => {
    return a - b;
}

let result = minus(10, 7);
console.log(result);