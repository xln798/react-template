
import './App.css';
import {
	Routes,
	BrowserRouter,
	Route,
	Redirect,
} from 'react-router-dom';
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from 'recoil';
import 'antd/dist/antd.css';
import Index from './pages/index.js'
document.querySelector('html').style.fontSize = `${(document.documentElement.clientWidth / 1920) * 100}px`;
import './common.css';

import { ConfigProvider } from 'antd';

import zhCN from 'antd/lib/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


function App() {
	return (
		<RecoilRoot>
			<ConfigProvider locale={zhCN}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Index/>}/>
					</Routes>
				</BrowserRouter>
			</ConfigProvider>
		</RecoilRoot>
	);
}

export default App;
