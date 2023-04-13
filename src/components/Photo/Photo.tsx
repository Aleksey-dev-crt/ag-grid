import React, { ReactElement } from 'react';
import PhotoStyles from './Photo.module.css'


function Photo({value}: {value: string}): ReactElement {
	return (
		<div className={PhotoStyles.container}>
			<img className={PhotoStyles.img} src={value} alt=''  />
		</div>
	)
}

export default Photo;
