function a(params) {
    function cbk() {
        console.log('cbk')
    }
    if (params) {
        let p = new Promise((resolve, reject) => {
            setTimeout(() => resolve({
                id: 1
            }), 200)
        }); // 获取数据的返回值为一个promise对象
        p.then((res) => {
            // params.asd=res;
            console.log('then')
            cbk(); // 这里 获取数据后再执行cbk
        }).catch((err) => {
            console.log(err)
        })
    } else {
        console.log('else')
        cbk();
    }
}
a(1);

// ..... 改写成 async await
async function a(params) {
    function cbk() {
        console.log('cbk')
    }
    if (params) {
        try {
            let p = await (new Promise((resolve, reject) => {
                setTimeout(() => resolve({
                    id: 1
                }), 200)
            })); // 获取数据的返回值为一个promise对象
            if (p) {
                console.log('await')
                cbk();
            }
        } catch (err) {
            console.log('err')
        }
    } else {
        console.log('else')
        cbk();
    }
}
a(1);