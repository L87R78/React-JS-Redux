import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//import App from './App'

//-----------------------------------------------Counter--------------------------------
//import App from './Components/Counter/App'

// let initialCount = 10
// function getCounter(){
//     return <App initialCount={initialCount} theme="dark" />
// }

// function Render(){
//     ReactDOM.render(getCounter(), document.getElementById('root'))
// }

// setTimeout(() => {
//     initialCount = 20
//     Render()
// }, 3000)

// Render()
//-----------------------------------------------Counter--------------------------------


import RandomList from './Components/Random-list'
import StarWarsPeopleList from './Components/Star-wars-list'

class App extends React.Component{
    state = {
        randomList: [1, 2, 3, 4, 5],
        page: 1
    }

    setNextPage = () => {
        return this.setState((prevState) => ({
            page: prevState.page + 1
        }))
    }
    render() {
    const { randomList, page } = this.state
        return(
            <React.Fragment>
                <button onClick={this.setNextPage}>Load next page</button>
                < StarWarsPeopleList page={page}/>
                {/* < RandomList randomList={randomList}/> */}
            </React.Fragment>
        )
    }

    componentDidMount(){
        // this.setState((prevState) => ({
        //     randomList: [...prevState.randomList, 101] //spread operator javaScript
        // }))
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)







