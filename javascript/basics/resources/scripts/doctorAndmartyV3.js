/**
 *
 *
 *
 *1.MachineCreator
 *2.Electrician
 *3.Driver
 *4.Users
 *
 *
 *
 * */
function Listener() {
    this.update = function (message) {
    }
}

function Target() {
    var listenerArray = [];
    this.addListener = function (listener) {
        listenerArray.push(listener);
    };

    this.notifyAll = function (message) {
        for (var i = 0; i < listenerArray.length; i++) {
            listenerArray[i].update(message);
        }
    };
}


function MachineCreator() {

    Target.call(this);
    this.createMachine = function () {
        var created = "Machine created";
        console.log(created);
        this.notifyAll(created);
    }

}

function Electritian() {
    Listener.call(this);
    Target.call(this);
    this.update = function (message) {
        var connected = "Electricity connected";
        if (message==="Machine created"){
            console.log(connected);
            this.notifyAll(connected);
        }
        else{
            throw new Error("There is an issue with something");
        }
    }

}
function Driver() {
    Listener.call(this);
    Target.call(this);
    this.update = function (message) {
        var available = "I can drive it";
        if (message==="Electricity connected"){
            console.log(available);
            this.notifyAll(available)
        }
        else {
            throw new Error("There is an issue with something");
        }
    }

}
function User() {
    Listener.call(this);
    Target.call(this);
    this.update = function (message) {
        var capable = "I can drive it in this part of time!";
        if (message==="I can drive it"){
            console.log(capable);
            this.notifyAll(capable)
        }
        else {
            throw new Error("There is an issue with something");
        }
    }

}


var creator = new MachineCreator();
var electrician = new Electritian();
var driver = new Driver();
var user = new User();
creator.addListener(electrician);
electrician.addListener(driver);
driver.addListener(user);
creator.createMachine();

console.dir([1,2,3,4]);
