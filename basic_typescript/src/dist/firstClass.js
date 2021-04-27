var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var a = "1";
// console.log('aaa', a);
var hello = 'world';
var getFullName = function (name, lastName) {
    return name + " " + lastName;
};
var user = {
    id: 1,
    name: 'builder',
    age: 7,
    getMessage: function () {
        return "Hello " + this.name;
    }
};
var user2 = {
    id: 2,
    name: 'Oded',
    getMessage: function () {
        return "Alright Alright: " + this.name;
    }
};
var popularTag = ['read', 'write',];
var readTag = 'books';
var userName = 'oded';
var pageName = '1';
var errMessage = null;
var newUser = null;
// void / any / never / unknown
var doSomething = function () {
    console.log('something');
};
//never
var neverDoSomething = function () {
    throw ('something');
};
var variableAny = 3;
var variableUnknown = 3;
var s1 = variableAny;
var s2 = variableUnknown;
var pageNumber = '1';
var numericPageNumber = pageNumber;
var Person = /** @class */ (function () {
    function Person(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.unchangeableName = name;
    }
    Person.prototype.changeUnchangeableName = function () {
        // this.unchangeableName = 'foo'
    };
    Person.prototype.getFullName = function () {
        return this.name + " " + this.lastName;
    };
    Person.maxAge = 120;
    return Person;
}());
;
var spongeBob = new Person('sponge', 'bob');
// console.log(spongeBob.getFullName())
// console.log(spongeBob);
// inheritence
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.setLanguages = function (languages) {
        this.languages = languages;
    };
    Programmer.prototype.getLanguages = function () {
        return this.languages;
    };
    return Programmer;
}(Person));
var bill = new Programmer('Bill', 'Gates');
;
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var hobit = {
    name: 'Frodo'
};
var hobitWithId = addId(hobit);
// const stringWithId = addId<string>('Foo')
console.log(hobitWithId);
