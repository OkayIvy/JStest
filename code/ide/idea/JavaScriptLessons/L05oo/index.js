function A() {
    this.sayHehe = function () {
        console.log("hehe");
    };
}

A.prototype.sayHello = function () {
    console.log("Hello");
}

//静态
A.sayHi = function () {
    console.log("hi");
}

var a = new A();
a.sayHello();


A.sayHi();


//继承
function B() {
    
}

B.prototype = new A();

var b = new B();
b.sayHello();
b.sayHehe();