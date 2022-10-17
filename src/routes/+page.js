export function ProjectsListVariables({ url }) {
	const limit = 15;
	const page = parseInt(url.searchParams.get('page'));
	console.log('page', page);
	return {
		limit: limit,
		offset: (isNaN(page) ? 0 : page) * limit
	};
}
