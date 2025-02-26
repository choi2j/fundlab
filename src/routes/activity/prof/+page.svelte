<script lang="ts">
	import '$lib/style.css';

	import { page } from '$app/state';

	import square from '$lib/assets/img/logo.png';
	import Navbar from '$lib/components/Navbar.svelte';
	import ResearchCardWork from '$lib/components/ResearchCardWork.svelte';

	let pathname = $state(page.url.pathname);
	let personalInfo: PersonalInfo = $state({
		name: 'string',
		where: 'string',
		type: 'prof',
		summary: 'hello',
		myWork: [
			{
				type: 'research',
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
			},
			{
				type: 'research',
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
			}
		],
		profile: square
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
	<div class="vert fs padding-3 gap-10">
		<div class="hori width-100p height-70p gap-10">
			<div class="vert width-50p gap-10">
				<h1 class="large-t bold-t dark4-t">내가 작성한 연구</h1>
				<div class="noborder shadow fs overflow-y gap-5">
					{#if personalInfo.myWork}
						{#each personalInfo.myWork as mw}
							<ResearchCardWork width={'width-100p'} re={mw} />
						{/each}
					{/if}
				</div>
			</div>
			<div class="vert width-50p gap-10">
				<h1 class="large-t bold-t dark4-t">북마크</h1>
				<div class="noborder shadow fs"></div>
			</div>
		</div>
		<div class="hori width-100p height-30p">
			<div class="vert width-100p gap-10">
				<h1 class="large-t bold-t dark4-t">새 연구 작성</h1>
				<a class="secondary-back shadow fs" href="/activity/prof/new">
					<p class="large-t bold-t white-t">새 연구 작성</p>
				</a>
			</div>
		</div>
	</div>
</div>
