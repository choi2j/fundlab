<script lang="ts">
	import '$lib/style.css';

	import { page } from '$app/state';

	import square from '$lib/assets/img/logo.png';
	import Navbar from '$lib/components/Navbar.svelte';

	let pathname = $state(page.url.pathname);

	let pageData: Investment = $state({
		type: 'invest',
		id: 12345,
		thumbnail: square,
		title: 'temp title',
		who: 'temp who',
		where: 'temp where',
		views: 1010,
		when: new Date(),
		content: 'hello',
		summary:
			'lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum. lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum. lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum.',
		tag: ['ai', 'security']
	});
	let user: User = $state({
		name: 'string',
		where: 'string',
		type: 'prof',
		profile: square
	});
</script>

<div class="fs hori">
	<Navbar {pathname} userState={user.type} />
	<div class="vert padding-3 gap-10">
		<p>{page.params.slug}</p>
		<h1>{pageData.title}</h1>
	</div>
</div>
