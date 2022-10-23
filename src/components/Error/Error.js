import React, { Component } from "react"
import './Error.css'
import errorImage from '../../assets/errorImage.png'
import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<section className='error-container'>
			<p className='error-text'>You didn't break the internet, but we can't find what you are looking for... Please visit our page later.</p>
			<img className='error-image'src={errorImage} alt='Cat with an error message on his computer'/>
		</section>
	)
}


export default Error