function F(proto) {
  function f() { };
  f.prototype = proto;
  return new f();
}
var obj2 = F(obj2);
console.log(obj2);