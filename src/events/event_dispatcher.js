/**
 * Created by Brett on 4/22/2017.
 */

EventDispatcher = function() {
    this.listeners = {};
};

EventDispatcher.prototype.addEventListener = function(type, callback){
    if(!(type in this.listeners)) {
        this.listeners[type] = [];
    }
    this.listeners[type].push(callback);
};

EventDispatcher.prototype.removeEventListener = function(type, callback){
    if(!(type in this.listeners)) {
        return;
    }
    var stack = this.listeners[type];
    for(var i = 0, l = stack.length; i < l; i++){
        if(stack[i] === callback){
            stack.splice(i, 1);
            return this.removeEventListener(type, callback);
        }
    }
};

EventDispatcher.prototype.dispatchEvent = function(event){
    if(!(event.type in this.listeners)) {
        return;
    }
    var stack = this.listeners[event.type];
    event.target = event.dispatcher = this;
    for(var i = 0, l = stack.length; i < l; i++) {
        stack[i].call(this, event);
    }
};

module.exports = new EventDispatcher();
