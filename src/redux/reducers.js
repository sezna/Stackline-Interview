import { ASYNC_LOAD_PRODUCT_DATA } from './actions';
import * as starterState from '../resources/Webdev_data2.json'

// Here, I hit an API for the JSON, but then I fall back on the local JSON if it
// fails. Right now, it will usually fail due to CORS unless you turn off your
// CORS policy, but I will leave the code here so you can see how I would go about
// populating the store initially, as one potential option.
let fetchedStarterState = undefined;

fetch('http://alex-hansen.com/Webdev_data2.json')
	.then(response => response.json())
	.then((json) => fetchedStarterState = json.default);

const initialState = {
	data: fetchedStarterState ? fetchedStarterState : starterState.default
};


export function myApp(state = initialState, action) {
	switch (action.type) {
		case ASYNC_LOAD_PRODUCT_DATA:
			return Object.assign({}, state); // TODO make this hit my API, rn it'll just do nothing
		default:
			return state;
	}
}

