const isPlain = function(obj){
    if(obj.toString() === '[object Object]'){
        return true
    } else {
        return false
    }
}

const elementCreator = function(tagName){
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

let p = elementCreator('p')
let img = elementCreator('img')
let button = elementCreator('button')
let div = elementCreator('div')
