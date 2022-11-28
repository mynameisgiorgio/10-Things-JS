// JavaScript Promises

function getWeather() {
    return new Promise(function(resolve, reject) {
        resolve('Sunny')                                //  reject('Sunny')
    })
}

getWeather().then(                                      // function then accepts two parameters
    function(data) {                                    // if I use reject in the promise, the second param gets called
    console.log(`First param ${data}`)
},
    function(data) {
        console.log(`'Second param ${data}`)
    }
)

// Improved code

function getWeather() {
    return new Promise(function(resolve, reject) {
        resolve('Sunny')                                //  reject('Sunny')
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`)
}

function onError(data) {
    console.log(`'Error: ${data}`)
}


getWeather().then(onSuccess, onError)

// ---------------------------------------------------

// Chaining

function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Sunny') 
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'Sunny':
                  resolve('🌞')
                  break
                case 'Claudy':
                  resolve('☁️')
                  break
                case 'Rainy':
                  resolve('🌧️')
                  break
                default:
                  reject('NO ICON FOUND')
            }
        }, 100)
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`)
}

function onError(data) {
    console.log(`'Error: ${data}`)
}


getWeather()
  .then(getWeatherIcon)                                 // Whatever gets resolve in the first promise, that data, goes in the next function, if they are chained, as parameter 
  .then(onSuccess, onError)

// ---------------------------------------------------

// Error handling REJECT and .catch()

  getWeather()
  .then(getWeatherIcon)                              
  .then(onSuccess)
  .catch(onError)

// Example

function fun1() {
    return new Promise( function(resolve, reject) {
        setTimeout( () => {
            reject('404')
        }, 100)
    })
}

function fun2() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('🥸')
        }, 100)
    })
}

function onSuccess(data) {
    console.log(data)
}

function onError(errorCode) {
    console.log(`ERROR: ${errorCode}`)
}

fun1()
  .then(fun2)
  .then(onSuccess)
  .catch(onError)

/*

if I don't have any error handlers inside my blocks 
 it will just jump straight to the catch block as soon as any function within my chain fails

if I catch the error inside then :

fun1()
.then(fun2, onError)
.then(onSuccess)

it's not going to stop the code from running the same way the catch block did it
it will actually continue going through the next then

*/

// ---------------------------------------------------

// finally()

function fun1() {
    return new Promise( function(resolve, reject) {
        setTimeout( () => {
            reject('404')
        }, 100)
    })
}

function fun2() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('🥸')
        }, 100)
    })
}

function onSuccess(data) {
    console.log(data)
}

function onError(errorCode) {
    console.log(`ERROR: ${errorCode}`)
}

function onFinally() {
    console.log('FINALLY WE BE DONE YO')
}

fun1()
  .then(fun2)
  .then(onSuccess)
  .catch(onError)
  .finally(onFinally)       

  // finally it's just an optional thing you can pass to
  // your chain it's just another piece of code that runs once everything else has resolved
  // if I reject any of them uh finally will still be called
  // In case you want to remove, any event listeners, you might have set up or you want to clean up after some variables