//react-lifecycle-methods-diagram

import React from 'react'

class StarWarsPeopleList extends React.Component {
    state = {
        people: [],
        isLoading: true,
    }


    shouldComponentUpdate(nextProps, nextState) { //true or false
        console.log('shouldComponentUpdate')

        const haveNextPropsChanged = (
            JSON.stringify(nextProps) !== JSON.stringify(this.props) ||
            Object.keys(nextProps).length !== Object.keys(this.props).length)

        const haveNextStateChanged = JSON.stringify(nextState) !== JSON.stringify(this.state)
        // console.log(haveNextPropsChanged)
        // console.log(haveNextStateChanged)
        return (haveNextPropsChanged || haveNextStateChanged)
    }

    getPeopleStarWars = (page) => {
        fetch(`https://swapi.co/api/people?page=${page}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                return data.results
            })
            // .then(resultData => this.setState(
            //     {
            //         people: resultData,
            //         isLoading: false,
            //     }
            // ))
            .then(resultData => this.setState((prevState) => (
                {
                    people: [...prevState.people, ...resultData],
                    isLoading: false,
                }
            )))
            .catch(err => console.log(err))
    }
    render() {
        console.log("starWarsPeopleList")
        const { people, isLoading } = this.state
        if (isLoading) {
            return <span>Loading...</span>
        }
        console.log(people)
        return (

            <div>
                {
                    people.map((person, i) =>
                        <li key={i}>
                            Name: {person.name}
                        </li>

                    )
                }
            </div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount')

        const { page } = this.props
        this.getPeopleStarWars(page)
    }
    componentDidUpdate(prevProps, prevState) {

        const currentPage = this.props.page
        const lastPage = prevProps.page
        console.log(currentPage)
        console.log(lastPage)

        if (currentPage !== lastPage) {
            this.getPeopleStarWars(currentPage)
        }
        console.log('componentDidUpdate')
    }
}
export default StarWarsPeopleList