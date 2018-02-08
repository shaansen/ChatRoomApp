import React from 'react'
import PropTypes from 'prop-types'

const AddMessage = (props) => {
	let input

	return (
		<section id='new-message'>
			<h3>Type New Message</h3>
			<span><input
				onKeyPress={ (e)=> {
					if(e.key === 'Enter') {
						props.dispatch(input.value, 'Me')
						input.value = ''
					}
				}} 
				type="text"
				placeholder="Press Enter to Send"
				ref={ node => {input=node}} />
			</span>
		</section>
		)
}

AddMessage.PropTypes = {
	dispatch: PropTypes.func.isRequired
}

export default AddMessage