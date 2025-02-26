<script lang="ts">
	import '$lib/style.css';

	import { page } from '$app/state';

	import Navbar from '$lib/components/Navbar.svelte';
	import square from '$lib/assets/img/logo.png';

	let chatList: User[] = $state([]);
	chatList = [
		{
			name: 'Temp Gyosu',
			where: 'Sung',
			type: '교수',
			profile: square
		},
		{
			name: 'Temp Gyosu',
			where: 'Sung',
			type: '교수',
			profile: square
		},
		{
			name: 'Temp Gyosu',
			where: 'Sung',
			type: '교수',
			profile: square
		}
	];

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
	<div class="fs hori padding-3">
		<div class="width-30p vert gap-3 shadow">
			{#each chatList as chats}
				<button class="padding-1 hori dark1-border-1 noradius center-a">
					<p class="regular-t medi-t">{chats.name}</p>
				</button>
			{/each}
		</div>
		<div class="width-70p vert"></div>
	</div>
</div>
