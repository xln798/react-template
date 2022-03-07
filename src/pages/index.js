import React, { Component, useState } from 'react'
import {  Modal, Select,Table,Pagination,Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';
import './index.less'

const { Option } = Select;


const commonState = atom({
	key: 'commonState',
	default: '111',
})
function Info() {
	const [a, b] = useRecoilState(commonState)
	console.log(a, b)
	const values = ['1', '2']


	
	
	
	return <div className='info'>
		11
	</div>
}
export default Info