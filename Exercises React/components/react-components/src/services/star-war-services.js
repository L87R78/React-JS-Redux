
const apiUrl = "https://www.swapi.co/api/people/";

export const getPeople = () => {
    return fetch(apiUrl)
            .then(res => res.json())
            //.then(json => console.dir(json))
            .then(data => data.results)
            .catch(err => console.error(err))

};
