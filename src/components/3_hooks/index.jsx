import React from 'react'
import ReactDOM from 'react-dom'

//类式组件
/* class Demo extends React.Component {

	state = {count:0}

	myRef = React.createRef()

	add = ()=>{
		this.setState(state => ({count:state.count+1}))
	}

	unmount = ()=>{
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	show = ()=>{
		alert(this.myRef.current.value)
	}

	componentDidMount(){
		this.timer = setInterval(()=>{
			this.setState( state => ({count:state.count+1}))
		},1000)
	}

	componentWillUnmount(){
		clearInterval(this.timer)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.myRef}/>
				<h2>当前求和为{this.state.count}</h2>
				<button onClick={this.add}>点我+1</button>
				<button onClick={this.unmount}>卸载组件</button>
				<button onClick={this.show}>点击提示数据</button>
			</div>
		)
	}
} */

function Demo(){
	//console.log('Demo');


	/**
	 * 
	 * So called as hook, is :
	 * 1) React.useState(0)
	 * 2) React.useRef()
	 * 3) React.useEffect()
	 * 
	 */

	const [count,setCount] = React.useState(0) // 这个 React.useState 有得到的值有两个数组，一个是变量本身，另外一个是设置变量的函数
	const myRef = React.useRef()

	// The second param, the empty array mean no monitor any thing. If no second param, then means monitor everything.
	// The second param, you can set [count], then means once the "count" parameter updated, then execute the function
	React.useEffect(()=>{
		console.log('===================executed!================', new Date())
	},[count])


	/*
	useEffect(() => { 
		// 在此可以执行任何带副作用操作
		return () => { // 在组件卸载前执行
		  // 在此做一些收尾工作, 比如清除定时器/取消订阅等
		}
	  }, [stateValue]) // 如果指定的是[], 回调函数只会在第一次render()后执行
	*/

	//加的回调
	function add(){
		//setCount(count+1) //第一种写法
		setCount(count => count+1 )
	}

	//提示输入的回调
	function show(){
		alert(myRef.current.value)
	}

	//卸载组件的回调
	function unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	return (
		<div>
			<input type="text" ref={myRef}/>
			<h2>当前求和为：{count}</h2>
			<button onClick={add}>点我+1</button>
			<button onClick={unmount}>卸载组件</button>
			<button onClick={show}>点我提示数据</button>
		</div>
	)
}

export default Demo
