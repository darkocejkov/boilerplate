import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
    return(
        <div />
    )
}

export const reactRender = (ele, data = {}) => {
    const root = createRoot(ele)
    root.render(
        <App {...data}/>
    )
}
