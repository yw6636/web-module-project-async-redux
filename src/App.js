import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import GifList from './components/GifList'
import GifForm from './components/GifForm'
import { getGifs, fetchError } from './action';
import axios from 'axios'
import './App.css';

function App(props) {
  const { loading, error, getGifs } = props

  useEffect(() => {
    getGifs('lesserafim')
  }, [])

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm/>

      {
        (error !== "") && <h3>{error}</h3>
      }

      {
        loading ? <h2>We are loading</h2> : <GifList/>
      }
    </div>
  );
}
const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, {getGifs})(App);