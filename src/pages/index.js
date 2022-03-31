/* eslint-disable react/prop-types */
import React, { Component, useState } from 'react'
import {  Modal, Select,Table,Pagination,Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './index.less'
import { NavLink,Outlet } from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../store/actions'
const { Option } = Select;
function mapStateToProps(state) {
	return {step: state.step}
}

function Info(props) {
	const test = ()=>{
		actions.setStep(props.step+1)(props.dispatch)
	}
	return <div className='info'>
		11info
		<Outlet></Outlet>
		<NavLink to="/a">a</NavLink>
		<div onClick={test}>测试redux点击加1{props.step}</div>
	</div>
}
export default connect(mapStateToProps)(Info)