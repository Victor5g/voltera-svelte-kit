import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
	const name = url.searchParams.get('name');

	if (!name) return { age_data: null };

	const res = await fetch(`https://api.agify.io?name=${encodeURIComponent(name)}`);
	const age_data = await res.json();

	return { age_data };
};
