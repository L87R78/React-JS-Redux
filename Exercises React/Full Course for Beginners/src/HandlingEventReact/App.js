import React, { Component } from 'react';

function Myfunc(){
    return console.log('Hello')
}

function App() {

    return (
        <div>
            <img onMouseOver ={Myfunc} src="https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2017/05/girl-names-1024x563.jpg"/>
            <br />
            <br />
            <button onClick ={Myfunc}>Click me</button>
        </div>
    )
}

export default App