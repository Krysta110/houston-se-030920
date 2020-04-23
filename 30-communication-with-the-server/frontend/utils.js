// let after = function(seconds){
//     return new Promise(function(resolve){
//         setTimeout(resolve, seconds * 1000)
//     })
// }

let after = function(seconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < seconds * 1000);
}