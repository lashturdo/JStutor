


function Subject() {
    let arrayOfListeners = [];
    let _name = 'Subject';

    this.setName = function (name) {
        _name = name;
        notify();
    };

    function notify() {
        for (let i = 0; i < arrayOfListeners.length; i++) {
            arrayOfListeners[i].update(_name);
        }

    }

    this.addListener = function (listener) {
        arrayOfListeners.push(listener);

    };
    this.deleteListener = function (listener) {
        for( let i = 0; i < arrayOfListeners.length; i++){
            if ( arrayOfListeners[i] === listener) {
                arrayOfListeners.splice(i, 1);
            }
    }
};
    this.showListenersToMe = function (){

        for (let i =0; i<arrayOfListeners.length;i++){
            console.log(arrayOfListeners[i]);
        }
    }}

function Listener() {

    this.update = function (value) {
        console.log("I have been updated ", value);

    }
}
let user = {
    name : 'John',
    age  : 23,
};
 user = new Listener();
let admin = new Subject();

admin.addListener(user);
admin.setName("John");
admin.showListenersToMe();



