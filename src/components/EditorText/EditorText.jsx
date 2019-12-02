import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import './editortext.scss';

class EditorText extends React.Component {

	render() {
		return (
			<div className='editorText'>
				<Editor
					init={{
						height: 300,
						menubar: false,
						plugins: [
							'advlist autolink lists link image charmap print preview anchor',
							'searchreplace visualblocks code fullscreen',
							'insertdatetime media table paste code help wordcount',
						],
						toolbar:
							'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
					}}
                    onChange={this.props.handleEditorChange}
				/>
			</div>
		);
	}
}

export default EditorText;
