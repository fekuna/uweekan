import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import EditorText from '../../components/EditorText/EditorText';
import Button from '../../components/CustomButton/CustomButton';
import Upload from '../../components/Upload/Upload';

import { addItem } from '../../redux/shop/shop.actions';

import './addproduct.scss';

class AddProduct extends React.Component {
	state = {
		title: '',
		description: '',
		price: '',
		stock: '',
		fileName: 'No file chosen, yet!',
		file: null
	};

	changeInputHandler = (e) => {
		console.log(e.target, 'aweeee');
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		});
	};

	handleFileChange = e => {
		console.log(e.target.files[0], 'files')
		this.setState({
			fileName: e.target.files[0].name,
			file: e.target.files[0]
		})
	}

	handleEditorChange = (e) => {
		const content = e.target.getContent();
		this.setState({
			description: content,
		});
	};

	submitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData()
		formData.append('product_name', this.state.title)
		formData.append('product_description', this.state.description)
		formData.append('product_price', this.state.price)
		formData.append('product_stock', this.state.stock)
		formData.append('product_image', this.state.file)

		// const newData = {
		// 	product_name: this.state.title,
		// 	// product_description: this.state.description,
		// 	product_price: this.state.price,
		// 	product_stock: this.state.stock,
		// 	product_image: formData,
		// };

		// console.log(newData, 'weeey');

		this.props.onAddItem(formData, this.props.history);
	};

	render() {
		return (
			<div className='addProduct'>
				<div className='contentContainer'>
					<div className='formContainer'>
						<div className='textContainer'>
							<h2>Let's add your new product!</h2>
						</div>
						<form
							encType='multipart/form-data'
							onSubmit={this.submitHandler}
						>
							<FormInput
								name='title'
								type='input'
								style={{ marginTop: '0' }}
								onChange={this.changeInputHandler}
								value={this.state.title}
								label='Nama Product'
							/>
							<EditorText
								handleEditorChange={
									this.handleEditorChange
								}
							/>
							<Upload
								name='fileUpload'
								onChange={this.handleFileChange}
								fileName={
									this.state.fileName
								}
							/>
							<FormInput
								name='stock'
								type='number'
								style={{ width: '10rem' }}
								onChange={this.changeInputHandler}
								value={this.state.stock}
								label='Stock'
							/>
							<FormInput
								name='price'
								type='input'
								style={{ width: '15rem' }}
								onChange={this.changeInputHandler}
								value={this.state.price}
								label='price'
							/>
							<Button style={{ width: '15rem' }}>
								Add
							</Button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	onAddItem: (item, history) => dispatch(addItem(item, history)),
});

export default connect(null, mapDispatchToProps)(AddProduct);
