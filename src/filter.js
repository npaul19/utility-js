const filter = ([head, ...tail], callbackFunc) =>
  head === undefined
    ? []
    : callbackFunc(head)
    ? [head, ...filter(tail, callbackFunc)]
    : [...filter(tail, callbackFunc)];
module.exports = filter;