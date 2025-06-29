<script lang="ts">
	import { page } from '$app/stores';
	import { debounceNavigate } from '$lib/debounce';
	import './+page.css';

	export let data: {
		age_data: { name: string; age: number; count: number } | null;
	};

	let name = $page.url.searchParams.get('name') ?? '';
	const debounce = debounceNavigate();

	function on_input(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		debounce(value);
	}

</script>

<main>
	<img src="/icon_calendar.png" alt="Ícone" class="header-icon" />
	<h2>Descubra a idade média pelo nome</h2>
	<input
		type="text"
		placeholder="Digite um nome..."
		bind:value={name}
		on:input={on_input}
		autocomplete="off"
	/>

	{#if name && !data.age_data}
		<p>Carregando...</p>
	{:else if data.age_data}
		<p>
			<strong>{data.age_data.name}</strong> tem em média
			<strong>{data.age_data.age}</strong> anos, com base em
			{data.age_data.count} pessoas.
		</p>
	{/if}
</main>
