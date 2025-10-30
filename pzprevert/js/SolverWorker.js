import { solveProblem } from './solver.concat.js'

self.onmessage = async function (url) {
	var input = url.data;
	var result = await solveProblem(input);
	var pair = [input, result];
	self.postMessage(pair);
}
