<script lang="ts">
	import { page } from '$app/state';
	import { user } from '$lib/script/example';

	import '$lib/script/type';
	import '$lib/style.css';

	import Navbar from '$lib/components/Navbar.svelte';

	let pathname: string = $derived(page.url.pathname);
	let { children } = $props();
	// svelte-ignore state_referenced_locally
	console.log(pathname);
</script>

<div class="flex-row fullsize">
	{#if pathname != '/' && pathname != '/signin' && pathname != '/signup'}
		<Navbar {pathname} {user} />
	{/if}
	<div class="padding-30a flex-column fullsize gap-10">
		{@render children()}
	</div>
</div>
