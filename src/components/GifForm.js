import React, { useState } from 'react';
import { connect } from 'react-redux'
import { getGifs } from '../action';

const GifForm = props => {
    const [searchTerm, setSearchTerm] = useState('lesserafim');
    const { getGifs } = props
    const handleSubmit = evt => {
        evt.preventDefault()
        getGifs(searchTerm) 
    }

    const handleChange = evt => {
        setSearchTerm(evt.target.value)
    }

    return (
        <form onClick={handleSubmit}>
            <input onChange={handleChange}/>
            <button>Search</button>
        </form>
    )
}

export default connect(null, {getGifs})(GifForm)