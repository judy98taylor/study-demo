// var urls = ['/a', '/b', '/c'];
// post
// // post 是 封装过的发送请求 返回一个promise对象
// async function f() {
//     urls.forEach((v) => {
//         let p = await post(v, {});
//     });
// }

// function alert1(params) {
//     console.log(params);
// }

// function repeat(func, times, wait) {
//     console.log(arguments);
//     let f = function (str) {
//         for (let i = 0; i < times; i++) {
//             setTimeout(() => {
//                 func(str);
//             }, wait * (i + 1));
//         }
//     }
//     return f;
// }
// var repeatedFun = repeat(alert1, 10, 5000);
// repeatedFun("hellworld");


function alert1(params) {
    console.log(params);
}

function repeat(func, times, wait) {
    let t = parseInt(times);
    let f = function (str) {
        var p = new Promise(function (resolve, reject) {
            resolve(str);
        });

        // setTimeout(() => {
        //     func(str);
        // }, wait * (t--));

        let singleStr = `
        .then(function (str) {
            console.log(${t--});
            setTimeout(() => {
                func(str);
            }, wait);
            return str;
        })`
        let evalStr = `p${singleStr.repeat(times)};`; // 只有一次。。。
        console.log(evalStr);
        eval(evalStr);
    }
    return f;
}

var repeatedFun = repeat(alert1, 10, 1000);
repeatedFun("hellworld");