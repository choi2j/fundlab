<script lang="ts">
	import '$lib/style.css';

	import { page } from '$app/state';
	
	import square from '$lib/assets/img/logo.png';
	import Navbar from '$lib/components/Navbar.svelte';

	let pathname = $state(page.url.pathname);
	let user: User = $state({
		name: 'string',
		where: 'string',
		type: 'prof',
		profile: square
	});
</script>

<div class="fs hori">
	<Navbar {pathname} userState={user.type} />
</div>
