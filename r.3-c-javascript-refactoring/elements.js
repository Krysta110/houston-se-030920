const isPlain = function(obj){
    if(obj.toString() === '[object Object]'){
        return true
    } else {
        return false
    }
}

const createElement = function(tagName){
    return function(...args){
        let element = document.createElement(tagName)
        if(typeof args[0] === 'string'){
            element.innerText = args.shift()
        }
        // If this firstArg is a normal object
        if(args[0] != undefined && isPlain(args[0])){
            let attributes = args.shift()
            for (let attributeName in attributes) {
                let attributeValue = attributes[attributeName]
                if( typeof attributeValue === 'function'){
                    element.addEventListener(attributeName, attributeValue)
                } else {
                    element[attributeName] = attributeValue
                }
            }
        }
        args.forEach(function(child){
            element.append(child)
        })
        return element
    }
}

let p = createElement('p')
let img = createElement('img')
let button = createElement('button')
let div = createElement('div')
