import React from 'react'
import styles from "./questionForm.module.scss"
import Form from '../../Form/Form'
function QuestionForm() {
	return (
		<section className={styles.question}>

			<div className='container'>
				<Form question>
					{<h3>have any questions?</h3>}
				</Form>
			</div>
		</section>

	)
}

export default QuestionForm