import React from 'react';
import { dragons } from './dragons.js'

//  * App                       (Wraps everything)
//  * PageTitle                 (Any other pieces)              
//  * CardContainer             (Because it shares data)
//  * DragonCard                (Because it repeats)

// Component
//  * A function that builds a piece of the page

// Props
//  * Configure a component
//  * Are very similar to passing arguments

function App(){

    return (
        <div>
            <PageTitle />
            <CardContainer />
        </div>
    )
}

// Defining A function
function PageTitle (){
    return <h1>Dragons</h1>
}

function CardContainer(){
    return (
        <ul>
            {dragons.map( dragon => 
                (
                    // DragonCard({
                    //     name: dragon.name,
                    //     description: dragon.description,
                    //     image: dragon.image
                    // })
                    <DragonCard 
                        key={dragon.id}
                        name={dragon.name}
                        description={dragon.description}
                        image={dragon.image}
                    />
                )
            )}
        </ul>
    )
}   

function DragonCard(props){
    let imageStyles = { 
        width: '100px', 
        // height: '100px' 
    }
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img style={imageStyles} src={props.image} />
        </div>
    )
}



export default App