require.config({
	baseUrl:'node_modules',
	paths:{
		'co':'co/index',
		'jquery':'jquery/dist/jquery'
	},
	shim:{
		'co':{
			exports:'co'
		},
		'jquery':{
			exports:'jquery'
		}
	}
})
require(['co','jquery'],function(co,$){
	$('body').html('woshijquery')
	let genTimeoutFun = (delay) => {
	  return () => {
	    return new Promise((resolve, reject) => {
	      setTimeout(() => {
	        resolve(`delayTime: ${delay}`)
	      }, delay)
	    })
	  }
	}
	let timeout1 = genTimeoutFun(1000)
	let timeout2 = genTimeoutFun(200)

	co(function * () {
	  let a = yield timeout1()
	  console.log(a) // delayTime: 1000
	  let b = yield timeout2()
	  console.log(b) // delayTime: 200

	  return 'end'
	}).then((res) => {
	  console.log(res)
	})
	
});