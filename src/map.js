const map = ([head, ...tail], callbackFunc) =>  
    head === undefined  && tail.length < 1
        ? [] 
        : [callbackFunc(head), ...map(tail, callbackFunc)];
module.exports = map;