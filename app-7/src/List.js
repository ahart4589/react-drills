import React, {Component} from 'react';

import Todo from './Todo';

export default function List(props){
    let list = props.task.map((element,index)=> {
        return 
        <Todo key={index} task = {element}/>
    })

    return(
        <div>
            {list}
        </div>
    )
}
