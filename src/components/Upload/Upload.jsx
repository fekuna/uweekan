import React, { useState, useRef } from 'react';

import { ReactComponent as Icon } from '../../assets/upload-solid.svg';

import './upload.scss';

const Upload = ({ fileUploadValue, ...props }) => {
	const fileUpload = useRef(null)

	const handleFileUploadClick = () => {
		fileUpload.current.click()
	}

	return (
		<div className='upload'>
			<div className='uploadButton'>
				<input
					type='file'
					className='imageInput'
					hidden='hidden'
					id='imageUpload'
					ref={fileUpload}
					{...props}
				/>
				<div className='uploadFile' onClick={handleFileUploadClick}>
					<span className='fileIconContainer'>
						<Icon className='fileIcon' />
						<span className='iconText'>
							Choose file
						</span>
					</span>
				</div>
			</div>
			<label class='inputLabel' htmlFor='imageUpload'>
				{fileUploadValue}
			</label>
		</div>
	);
};

export default Upload;
