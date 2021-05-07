export const getCountries =  () => dispatch => {

    fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => res.json())
    .then(response => 
        dispatch({type:'GET_COUNTRIES_SUCCESS', payload:response})
        )

}



