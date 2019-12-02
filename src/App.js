import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation/Navigation';
import Shop from './pages/Shop/Shop';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CheckOut from './pages/checkout/checkout.component';
import AddProduct from './pages/AddProduct/AddProduct';
import TopUp from './pages/TopUp/TopUp';

import { onCheckLoginUser } from './redux/auth/auth.actions';

function App(props) {
	useEffect(() => {
		props.onTryLogin();
	}, []);

	return (
		<Fragment>
			<Navigation />
			<div className='App'>
				<Switch>
					<Route exact component={Shop} path='/' />
					<Route exact component={Login} path='/login' />
					<Route
						exact
						component={Register}
						path='/register'
					/>
					<Route exact component={CheckOut} path='/checkout' />
					<Route exact component={AddProduct} path='/addproduct' />
					<Route exact component={TopUp} path='/topup' />
				</Switch>
			</div>
		</Fragment>
	);
}

const mapStateToProps = (state) => ({
	buyer: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
	onTryLogin: () => dispatch(onCheckLoginUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
