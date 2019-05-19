import React from 'react';


// //Class задължително да има Render method
// //Function компонентите са сами по-себе си Render  - te връщат JSX
// //ако имаме нужда от State задължително class


// class HelloWord extends React.Component{

//     //това всеки път когато се прави class компенент - constructor() и render()
//     constructor(props){
//         super(props)    //контруктора е за инициализиране на компонентите
//     }


//     render(){   //това както Function компонентите връща JSX - рендерира DOM елементите
//         const { message } = this.props
//         return (
//             <div>
//                 <h2>{message}</h2>
//             </div>
//         )
//     }

// }

//---------------------------------------------------------------------------------------------------->


class CouterButton extends React.Component {
    constructor(props) {
        super(props)
        const { id } = this.props;

        this.state = {
            count: Number(window.localStorage.getItem(`${id}-count`)) || 0,
            //count: 0
        };

        this.updateCounter = this.updateCounter.bind(this);
        this.resetCouter = this.resetCouter.bind(this);

    }

    updateCounter(){
        const { id } = this.props;
        const oldCounter = this.state.count

        //setState приема като пътви компонент новия state който подаваме, асинхронен е
        this.setState({     
            count: oldCounter + 1,
        }, () => {     //това е втората funcion на state, но преди да рендерира и след изпълняването  на count + 1
            const updateCounter = this.state.count;
            window.localStorage.setItem(`${id}-count`, `${updateCounter}`)
            //count = window.localStorage.setItem('count', `${localCount}`);
        });
    }
    resetCouter(){
        this.setState({     
            count: 0
        });
    }
    render() {
        let { count } = this.state
        return (
            <div>
                <span>{count}</span>
                <br />
                <button onClick={this.updateCounter}>+</button>
                <button onClick={this.resetCouter}>Reset</button>
            </div>
        )
    }
}


// ReactDOM.render(
//     <Fragment>
//         < CouterButton id="first-counter"/>
//         < CouterButton id="second-counter"/>
//         < CouterButton id="third-counter"/>
//     </Fragment>,
   
//    document.getElementById('root'));

export default CouterButton





