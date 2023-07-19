import React from 'react'
import Form from '../Form/Form'

import styles from "./modal.module.scss"


function Modal({closeModal}) {
	return (
		<div className={styles.wrapper} onClick={(e) => closeModal(e.target)} data-close>
			<article className={styles.modal}>
					<div className={styles.modal__body}>
						<button data-close className={styles.btn__close}>X</button>
						<Form>
							<h2>Leave your mobile and we are call you!</h2>
						</Form>
		
					</div>
				</article>
		</div>
	)
}

export default Modal