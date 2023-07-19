import React from 'react'

import icon from "./cab748244ac6b9fe-humanity-gif-find-share-on-giphy.gif"
function PageNotFound() {
	return (
	<main>
			<h1 style={{
				position: "relative",
				zIndex: 1,
				color: "white",
				textAlign: "center",
				padding: "150px 0"
			}}>Sorry this page does not exist yet</h1>
			<img src={icon}
				style={{
					position: "absolute",
					top: 0,
left: 0

				}}
				width={"100%"}
				height={"100%"}
				alt="page not found" />
	</main>
	)
}

export default PageNotFound