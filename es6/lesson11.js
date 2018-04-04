{
  // 供应商 原始数据
  let obj={
    time: '20180123',
    name: 'net',
    _r: 123
  }
  //   代理商
  let monitor=new Proxy(obj,{
    // 实现代理的方法
    // 代理 拦截 对象的属性读取
    get(target,key){
      return target[key].replace('2018','20018');
    },
    // 拦截对象设置属性
    set(target,key,value){
      // 只允许修改name
      if(key==='name'){
        return target[key]=value;
      }else{
        return target[key];
      }
    },
    // 判断当前对象是否包含某属性 key in object
    has(target,key,value){
      // 只允许修改name
      if(key==='name'){
        return target[key]=value;
      }else{
        return false;
      }
    },
    // 只能删除_属性
    deleteProperty(target,key){
      if(key.indexOf('_')>-1){
        delete target[key];
        return true;
      }else{
        return target[key];
      }
    },
    // 拦截某些方法 比如keys
    ownKeys(){
        return Object.keys(target).filter(v=>v!=='time');
    }
  });
  // 用户访问的是monitor
  // 通过proxy操作obj obj对用户不可见
  console.log('get',monitor.time);
  monitor.time='1111';
  monitor.name='namehhh';
  console.log('set',monitor.time,monitor.name);
  console.log('has','name' in monitor,'time' in monitor);
  // delete monitor.time;
  // delete monitor._r;
  // console.log('get',monitor);
  console.log('ownKeys',Object.keys(monitor));

  // reflect api == Map
  console.log('reflect get',Reflect.get(obj,'time'));
  Reflect.set(obj,'name','reflect');
  console.log('has',Reflect.get(obj,'name'));
}
// 应用场景 数据类型检验 业务解耦
{
  function validator(target,validator) {
    return new Proxy(target,{
      _validator
    });
  }
}

{
  console.log();
}
