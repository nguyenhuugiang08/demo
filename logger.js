import reducer from "./reducer.js"
export default function logger() {
    return (prevState, action, agrs) => {
        console.group(action)
        console.log('prevState: ', prevState)
        console.log('Action Arguments: ', agrs)
        const nextState = reducer(prevState, action, agrs)
        console.log('next state: ', nextState)
        console.groupEnd()
        return nextState
    }
}