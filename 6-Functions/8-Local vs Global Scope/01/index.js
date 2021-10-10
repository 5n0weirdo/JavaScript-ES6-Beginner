let color = "red";        //Global scope

function start() {
    const message = "Hello";
    const color = "blue";
    console.log(color);
}

function stop() {
    const message = "bye";
    console.log(color);
}

start();
stop();