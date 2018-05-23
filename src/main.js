const App = require('./App.vue');

const vm = new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App),
});
