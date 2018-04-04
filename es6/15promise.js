{
  // 捕获错误
  let ajax=function (num) {
    console.log('4');
    return new Promise(function (resolve,reject) {
      if(num>5){
        resolve();
      }else{
        throw new Error('err!');
      }
    });
  }

  ajax(6).then(function () {
    console.log(666);
  }).catch(function (err) {
    console.log('err !>5');
  })
}
{
// 所有图片加载完成后 添加到页面
  function loadImg(src) {
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=()=>{resolve(img);};
      img.onerror=()=>{reject(img);};
    });
  }

  function showImgs(imgs) {
    imgs.forEach((v)=>{
      document.body.appendChild(v);
    });
  }

  Promise.all([
    loadImg('picsrc'),
  ]).then(showImgs);
}

{
// 一个图片加载完成后 添加到页面
  function loadImg(src) {
    return new Promise((resolve,reject)=>{
      let img=document.createElement('img');
      img.src=src;
      img.onload=()=>{resolve(img);};
      img.onerror=()=>{reject(img);};
    });
  }

  function showImgs(imgs) {
    imgs.forEach((v)=>{
      document.body.appendChild(v);
    });
  }

  Promise.race([
    loadImg('picsrc'),
  ]).then(showImgs);
}

{
  // 抽奖
  let draw=(count){console.log(``);}
}
{
  // 长轮训
  let ajax=function* () {
    
  }
}
