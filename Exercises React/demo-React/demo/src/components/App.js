import React from 'react'
import Footer from './Footer'
import Clock from './Clock'

import './static/site.css'
import ContactCard from '../DataJSON'


function App() {
    return (
        <div>
            <nav>
                <h1>Hello a third time!</h1>
                <ul>
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                    <li>Thing 3</li>
                </ul>
            </nav>
            <main>
                <p>This si my paragpraph</p>
            </main>
            <Footer />
            <Clock />

            <ContactCard
                contact={
                    {
                        id: 0,
                        name: "lubomir",
                        imageUrl: "https://avatarfiles.alphacoders.com/889/88985.png",
                        content: "blq blq",
                    }
                }
            />

        </div>
    )
}
export default App