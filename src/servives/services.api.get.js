let _url = 'https://api.spacexdata.com/v3/launches/';
const getApi = () => {
    return fetch(_url)
        .then(value => value.json())
}



export default getApi