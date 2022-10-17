/** @type {import('houdini').ConfigFile} */
const config = {
	client: './src/client',
	apiUrl: 'https://api.emergingweb3.com/v1/graphql',
	scalars: {
		timestamptz: {
			type: 'Date',
			unmarshal(val) {
				return Date.parse(val);
			}
		}
	}
};

export default config;
