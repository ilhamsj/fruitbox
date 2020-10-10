const addTodo = data => {
    return ({
        type: 'ADD',
        payload: data
    })
}

const delTodo = data => {
    return ({
        type: 'DEL',
        payload: data
    })
}

export {
    addTodo,
    delTodo
}