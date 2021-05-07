
import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { getCountries } from './actions';


const App = (props) => {


  useEffect(() => {
    props.getCountries()
  }, [])

  console.log(props)

  return (
    <>
      <div className="App">
        {props.countries.map(country => {
          return (
            <div key={country.name}>
              <h3>{country.name}</h3>
              <h4>{country.capital}</h4>
              <p>
                <img
                  src={country.flag}
                  alt={country.name}
                  style={{ width: "100px" }}
                />
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}


const mapStateToProps = state => {
  return {
    countries: state.countries
  }
}

export default connect(mapStateToProps, {getCountries})(App);
