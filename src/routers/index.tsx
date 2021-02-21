import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

// React.FC是react对组件定义的类型
const App: React.FC = function(props){
    return <HashRouter>
        <Switch>
            <Route></Route>
        </Switch>
    </HashRouter>
}

export default App