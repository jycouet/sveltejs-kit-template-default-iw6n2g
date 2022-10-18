import { HoudiniClient } from '$houdini';

async function fetchQuery({ fetch, text = '', variables = {}, metadata }) {
	const url = 'https://api.emergingweb3.com/v1/graphql';
	console.log(`variables`, variables);

	const result = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});
	return await result.json();
}

export default new HoudiniClient(fetchQuery);
