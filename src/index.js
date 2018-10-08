// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (propertyName) => propertyName.toString();
const createNotEnumerableProperty = (propertyName) => Symbol(propertyName);
const createProtoMagicObject = () => {
    function fnc() {
    }

    let proto = {};
    fnc.__proto__ = proto;
    fnc.prototype = proto;
    return fnc;
};
const incrementor = () => {
    incrementor.cnt++;

    return incrementor;
};
incrementor.cnt = 0;
incrementor.valueOf = () => incrementor.cnt;
const asyncIncrementor = () => Promise.resolve(++asyncIncrementor.cnt);
asyncIncrementor.cnt = 0;
asyncIncrementor.valueOf = () => incrementor.cnt;

function* createIncrementer() {
    let value = 0;
    yield ++value;
    yield ++value;
    yield ++value;
    yield ++value;
    yield ++value;
    yield ++value;
    yield ++value;
    yield ++value;
    yield ++value;
    yield ++value;
}

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) => {
    var cb = function(resolve) {
        setTimeout(() => {
            resolve(value);
        }, 1000);
    };

    return new Promise(cb);
};
const getDeepPropertiesCount = (obj) => {
    const objKeys = Object.keys(obj);
    if (objKeys.length === 0) {
        return 0;
    }
    let sum = objKeys.length;
    for (const o of objKeys) {
        sum += getDeepPropertiesCount(obj[o]);
    }
    return sum;
};
const createSerializedObject = () => null;
const toBuffer = () => {
};
const sortByProto = (arr) => {
    return arr.sort((a, b) => a.isPrototypeOf(b));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;