import A from "../pages/A";
import B from "../pages/B";
import Index from '../pages/index'
import Sub from '../components/sub'
export default [
	{
		path:'/',
		element:<Index/>,
		children:[
			{
				path:'sub',
				element:<Sub/>
			}
		]
	},
	{
		path:'/a',
		element:<A/>
	},
	{
		path:'/b',
		element:<B/>
	}
]