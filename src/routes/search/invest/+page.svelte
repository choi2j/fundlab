<script lang="ts">
	import '$lib/style.css';
	import '$lib/ts/type';

	import { page } from '$app/state';
	import { onMount } from 'svelte';

	import search from '$lib/assets/icon/search.svg';
	import square from '$lib/assets/img/logo.png';
	import del from '$lib/assets/icon/delete.svg';
	import filter from '$lib/assets/icon/filter.svg';
	import map from '$lib/assets/icon/map.svg';
	import calendar from '$lib/assets/icon/calendar.svg';
	import view from '$lib/assets/icon/visibility.svg';
	import bookmark from '$lib/assets/icon/bookmarks.svg';
	import docu from '$lib/assets/icon/document.svg';
	import myinfo from '$lib/assets/icon/myinfo.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import ResearchCardSearch from '$lib/components/ResearchCardSearch.svelte';

	onMount(() => {
		const postScroll = document.getElementById('filterList');

		if (postScroll) {
			postScroll.addEventListener('wheel', (event) => {
				postScroll.scrollBy({
					left: event.deltaY < 0 ? -postScroll.clientWidth/30 : postScroll.clientWidth/30
				});
				event.preventDefault();
			});
		}
	});

	let pathname = $state(page.url.pathname);
	let searchResult: Research[] = $state([]);
	let filterItems: filterItem[] = $state([]);
	let sel: Research | undefined = $state();

	searchResult = [
		{
			id: 1234,
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
		}
	];

	filterItems = [
		{
			tag: 'topic',
			content: 'AI'
		},
		{
			tag: 'topic',
			content: 'Security'
		},
		{
			tag: 'topic',
			content: 'Technology'
		},
		{
			tag: 'where',
			content: 'University'
		},
		{
			tag: 'when',
			content: '2025-01-15 ~ 2025-02-20'
		},
		{
			tag: 'who',
			content: 'Kim Gyosu'
		},
		{
			tag: 'view',
			content: '2000 ~'
		},
		{
			tag: 'bookmark',
			content: 'bookmark only'
		}
	];
	let user: User = $state({
		name: 'string',
		where: 'string',
		type: 'prof',
		profile: square
	});
</script>

<div class="fs hori">
	<Navbar {pathname} userState={user.type} />
	<div class="vert width-60p padding-3 gap-10">
		<div class="padding-1 noborder hori center gap-10 width-100p shadow">
			<input type="text" name="" id="" class="fs dark4-t regular-t medi-t" />
			<img src={search} alt="" />
		</div>
		<div class="hori center-a gap-10 overflow-x padding-1" id="filterList">
			<button class="padding-1 padding-b0 noborder hori center gap-5 width-fit shadow">
				<img src={filter} alt="" class="regular-icon" />
			</button>
			{#each filterItems as item}
				<button
					class="padding-1 padding-b0 noborder hori center gap-5 width-fit shadow white-space"
				>
					<img src={del} alt="" class="regular-icon" />
					<p class="dark4-color small-t medi-t gap-3">
						{#if item.tag === 'topic'}
							<img src={docu} alt="" class="small-icon" />
						{:else if item.tag === 'where'}
							<img src={map} alt="" class="small-icon" />
						{:else if item.tag === 'when'}
							<img src={calendar} alt="" class="small-icon" />
						{:else if item.tag === 'who'}
							<img src={myinfo} alt="" class="small-icon" />
						{:else if item.tag === 'view'}
							<img src={view} alt="" class="small-icon" />
						{:else if item.tag === 'bookmark'}
							<img src={bookmark} alt="" class="small-icon" />
						{/if}
						{item.content}
					</p>
				</button>
			{/each}
		</div>
		<div class="vert gap-10 width-100p height-100p padding-1 overflow-y">
			{#each searchResult as r}
				<ResearchCardSearch width={'width-100p'} re={r} bind:selected={sel} />
			{/each}
		</div>
	</div>
	<div class="vert width-80p shadow padding-3 gap-10">
		{#if sel}
			<div class="width-100 center">
				<img src={sel.thumbnail} alt="" class="xlarge-img noborder" />
			</div>
			<p class="xlarge-t dark4-t bold-t">{sel.title}</p>
			<p class="regular-t dark2-t semi-t">{sel.who}</p>
			<p class="small-t dark2-t medi-t">
				{sel.where} | {sel.when} | {sel.views}
			</p>
			<div class="overflow-y">
				<p class="regular-t dark4-t medi-t ">
					{sel.summary}
				</p>
			</div>
			<div class="hori width-100p gap-10 margin-ta">
				<a class="primary-back width-70p padding-1 white-t regular-t bold-t" href="/search/invest/{sel.id}">
					자세한 내용
				</a>
				<button class="dark0-back width-30p padding-1 white-t regular-t bold-t">
					<img src={bookmark} alt="" class="large-icon">
				</button>
			</div>
		{:else}
			<p class="regular-t medi-t dark1-t center fs">Select a research you want to see</p>
		{/if}
	</div>
</div>
