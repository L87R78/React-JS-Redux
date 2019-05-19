import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//------------------------------------------------------------------------------------>
//const Hello = () => <div>Hello React</div>; 
//babel е един тул който webpack използва за да parse-не jsx синтаксиса и да го замени с React.createElement
//това става отдолу
//const Hello = () => React.createElement('div', {}, 'Helloo React');
//------------------------------------------------------------------------------------>




//------------------------------------------------------------------------------------>
// const Hello = () => {
//     const id = 'some-id';           //компонентите които не връщат само jsx се използват body скобите ->{}
//     return (
//         <div> id= {id}
//             hellooooo
//             <span>hahahha</span>

//             <a href="#">Some Link</a>
//         </div>
//     )
// }
// const Hello = () => (
//     //компонентите направо връщат jsx 
//     <div> id= "Some-id"
//         hellooooo
//         <span>hahahha</span>
//         <a href="#">Some Link</a>
//     </div>
// )
//------------------------------------------------------------------------------------>

function renderApp() {
    return ReactDOM.render(
        <Hearder />,//това е шапката и отдолу за всичките компоненти
        document.getElementById('root'));
}


let logoText = 'My Site'
const handleNavLinkCick = (event) => {
    event.preventDefault();

    const content = event.target.innerHTML;
    console.log(content)
    logoText = content
    renderApp()
    //console.log(event.target.innerHTML);
}
const Logo = () => {

    return (
        <div>
            <h1>{logoText}</h1>
        </div>
    )

};
const Navigation = () => {
    const className = "site-nav";
    const LinkClassName = `${className}-link`;
    return (
        <nav className={className}>
            <ul>
                <li><a className={LinkClassName} href="/" onClick={handleNavLinkCick}>Home</a></li>
                <li><a className={LinkClassName} href="/contact" onClick={handleNavLinkCick}>Contact us</a></li>
                <li><a className={LinkClassName} href="/about" onClick={handleNavLinkCick}>About</a></li>
            </ul>
        </nav>
    )
};
const Hearder = () => {
    return (
        <header>
            <Logo />,
            <Navigation /> 
        </header>
    )
};
renderApp()



