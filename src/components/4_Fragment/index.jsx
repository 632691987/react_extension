import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
	/**
	 * 这个fragment 跟 themeleaf 一样，代表被包含进去的时候不包括自己本身这个结构
	 * 其实不用 <Fragment> ，也用 <> 也可以做到。区别在于，<Fragment> 可以指定一个key, 例如 <Fragment key={1}> 可以标定
	 */

	render() {
		return (
			<Fragment key={1}>
				<input type="text"/>
				<input type="text"/>
			</Fragment>
		)
	}
}
