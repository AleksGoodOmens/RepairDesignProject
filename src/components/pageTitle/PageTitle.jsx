import React from 'react'
import "./pageTitle.scss"
function PageTitle({children, className}) {
	return (
		<h2 className={`page-title ${className}`}>{children}</h2>
	)
}

export default PageTitle