
import './App.css';
import {
	useRoutes,
} from 'react-router-dom';
import 'antd/dist/antd.css';
document.querySelector('html').style.fontSize = `${(document.documentElement.clientWidth / 1920) * 100}px`;
import './common.css';

import { ConfigProvider } from 'antd';

import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import routes from './router/index'
import {Provider} from 'react-redux';
import store from './store/index';
function App() {
	const element = useRoutes(routes)
	return (
		<Provider store={store}>
			<ConfigProvider locale={zhCN}>	
				{element}	
			</ConfigProvider>
		</Provider>
		
	);
}

export default App;
