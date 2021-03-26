import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	)
}

Meta.defaultProps = {
	title: 'beanbroidery',
	description: 'Customised embroidery products perfect as gifts',
	keywords: 'embroidery hoops, customised gifts, handmade crafts'
}

export default Meta
