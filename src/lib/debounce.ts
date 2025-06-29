import { goto } from '$app/navigation';

export function debounceNavigate(delay = 800) {
	let timeout: ReturnType<typeof setTimeout>;

	return (value: string) => {
		clearTimeout(timeout);

		timeout = setTimeout(() => {
			const trimmed = value.trim();
			if (trimmed) {
				goto(`/?name=${encodeURIComponent(trimmed)}`, { replaceState: true });
			}
		}, delay);
	};
}
