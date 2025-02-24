<script lang="ts">
	import '$lib/style.css';

	import { page } from '$app/state';
	
	import Navbar from '$lib/components/Navbar.svelte';

	let pathname = $state(page.url.pathname);
</script>

<div class="fs hori">
	<Navbar {pathname} />
</div>
