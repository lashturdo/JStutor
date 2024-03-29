/**
 *
 * we can create chain of promises, to keep async away from inner code hell
 *
 */

const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';

function MyPromise(executor) {
    let state = PENDING;
    let value;

    function resolve(newValue) {
        state = RESOLVED;
        value = newValue;
        return new MyPromise(resolve())
    }

    executor(resolve);
}


console.log("Start");

const
    promise = new MyPromise((resolve) => {
        console.log("preparing data...");
        const backendData = {
            name: "User Information",
            port: 8080,
            status: 200
        }
        resolve(backendData);
    });

promise
    .then(data

            => {
            console
                .log(
                    'first then'
                    ,
                    data
                )
            data
                .isModified = true;
            return
            data;
        }
    ).then(clientData => {
    console.log('Data recieved', clientData)
    clientData.modifiedByPromise = true;
    return clientData;

}).then(clientData => {
    console.log("Here's modified by promsie Data: ", clientData);
    return clientData;

});


console.log("Jopa", promise);