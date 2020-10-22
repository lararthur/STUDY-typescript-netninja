// LESSON 9 Type Aliases - https://www.youtube.com/watch?v=AmpwfbdFYL8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=9

type StringOrNum = string | number;
type objWithName = { name: string, uid: StringOrNum};

const legDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello`);
};

const greetAgain = (user: objWithName) => {
    console.log(`${user.name} says hello`);
};