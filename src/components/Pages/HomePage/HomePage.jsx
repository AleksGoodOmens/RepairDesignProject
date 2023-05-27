import React from 'react'
import Front from '../../sections/front/Front'
import Control from '../../sections/control/Control'
import Projects from '../../sections/projects/Projects'
import Gallery from '../../sections/gallery/Gallery'
import Repairs from '../../sections/repairs/Repairs'
import Clients from '../../sections/Clients/Clients'
import QuestionForm from '../../sections/QuestionForm/QuestionForm'
import Map from '../../sections/Map/Map'


function HomePage() {
	return (
		<main>
			<Front />
			<Projects />
			<Control />
			<Repairs/>
			<Gallery />
			<Clients />
			<QuestionForm />
			<Map />
		</main>
	)
}

export default HomePage