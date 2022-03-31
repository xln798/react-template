import React, { Component, useState } from 'react'
import {  Modal, Select,Table,Pagination,Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './index.less'
import { NavLink,Outlet } from 'react-router-dom';

const { Option } = Select;

function Info() {
	return <div className='info'>
		11info
		<Outlet></Outlet>
		<NavLink to="/a">a</NavLink>
	</div>
}
export default Info