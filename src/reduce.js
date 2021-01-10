const reducer = ([head, ...tail], fn, acc) => (head === undefined) ? acc : reducer(tail, fn, fn(acc, head));
const reduce = ([head, ...tail], fn, acc) => {
    if (acc === undefined && head === undefined) {
        return undefined;
    } else if (acc === undefined && head !== undefined) {
        acc = head;
        head = tail.shift();
        return reducer([head, ...tail], fn, acc);
    } else {
        return reducer([head, ...tail], fn, acc);
    }
}
module.exports = reduce;