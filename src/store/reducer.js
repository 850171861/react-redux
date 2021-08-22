const defaultState = {
    inputValue:'',
    list:['点击我删除','点击文字删除']
}
export default (state = defaultState,action) => {
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.unshift(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'del_todo_item'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }
    return state
}