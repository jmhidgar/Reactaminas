// function WithCallback(cb) {
//     console.log('1');
//     setTimeout(function () {
//         cb();
//     }, 5000);
//     console.log('2');
// }

// WithCallback(function () {
//     WithCallback(function () {
//         WithCallback(function () {
//             WithCallback(function () {
//                 WithCallback(function () {
//                     console.log('hola caracola');
//                 });
//             });
//         });
//     });
// });

function WithPromise(time = 2000) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Patata');
        }, time);
    });
}

// WithPromise()
//     .then(function (param) {
//         console.log(param);
//         return WithPromise();
//     })
//     .then(function (param) {
//         console.log(param);
//         return WithPromise();
//     })
//     .catch(function (param) {
//         console.log(param);
//     });

// const asyncFunc = async () => {
//     const result = await WithPromise();
//     console.log(result);
// };

// async function asyncFunc() {
//     try {
//         const result = await WithPromise(2000);
//         console.log(result);
//         const result2 = await WithPromise(4000);
//         console.log(result2);
//         const result3 = await WithPromise(5000);
//         console.log(result3);
//     } catch (error) {
//         console.log(error);
//     }
// }

// asyncFunc();

const promiseArray = [];
promiseArray.push(WithPromise(2000)); // api user
promiseArray.push(WithPromise(4000)); // api product
promiseArray.push(WithPromise(5000)); // api carrito

Promise.all(promiseArray)
    .then(() => {
        console.log('Cuando termine todo');
    });