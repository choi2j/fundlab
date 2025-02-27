<script lang="ts">
	import '$lib/style.css';

	import { page } from '$app/state';

	import Navbar from '$lib/components/Navbar.svelte';

	import square from '$lib/assets/img/logo.png';
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
	<div class="padding-3 vert fs">
		<input type="text" name="" id="" class="">
	</div>
</div>
