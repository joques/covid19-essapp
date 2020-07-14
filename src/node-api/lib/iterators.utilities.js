function objectIterator(obj) {
    index = 0;
    keys = Object.keys(obj);
    values = Object.values(obj);
    return {
        next: function () {
            i = index++;
            return i < values.length ?
                { value: { key: keys[i], value: values[i] }, done: false } : { done: true };
        }
    };
}

module.exports = {
    object: (obj) => {
        return objectIterator(obj);
    }
}