<script lang="ts">
	import '$lib/style.css';
	import '$lib/ts/type';

	import { page } from '$app/state';

	import search from '$lib/assets/icon/search.svg';
	import square from '$lib/assets/img/logo.png';
	import Navbar from '$lib/components/Navbar.svelte';
	import ResearchCardRecommend from '$lib/components/ResearchCardRecommend.svelte';
	let recommendResult: Research[] = $state([]);

	recommendResult = [
		{
			id: 1,
			thumbnail: square,
			title: '모바일 수집형 RPG의 사용자 분석: "쿠키런:킹덤"을 중심으로',
			who: 'temp who',
			where: 'temp where',
			views: 1010,
			when: new Date(),
			content: 'hello',
			summary:
				'lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum. lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum. lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum.',
			tag: ['AI', 'Security']
		},
		{
			id: 12,
			thumbnail: square,
			title: '버추얼 아이돌 특성이 버추얼 아이돌 공연 수용자 태도에 미치는 영향',
			who: 'temp who',
			where: 'temp where',
			views: 1010,
			when: new Date(),
			content: 'hello',
			summary:
				'lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum. lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum. lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum.',
			tag: ['AI', 'Security']
		},
		{
			id: 123,
			thumbnail: square,
			title:
				'First unambiguous detection of ammonia in the atmosphere of a planetary mass companion with JWST/MIRI coronagraphs',
			who: 'temp who',
			where: 'temp where',
			views: 1010,
			when: new Date(),
			content: 'hello',
			summary:
				'lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum. lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum. lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eros magna, ullamcorper quis velit quis, posuere tristique diam. Sed sem diam, porttitor ut leo lacinia, porttitor fringilla dui. Mauris vulputate egestas libero, quis dapibus nisi ullamcorper vel. Nullam non placerat odio. Aliquam tincidunt ex vel dui aliquet gravida. Curabitur quis augue pharetra, ultrices felis et, dapibus neque. Cras at elementum lorem. Proin in nunc viverra, scelerisque neque a, tempor neque. Donec hendrerit arcu a dui tempus pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra ligula non lorem dapibus pharetra. Sed non rutrum ipsum.',
			tag: ['AI', 'Security']
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
	<div class="vert fs padding-3 gap-10">
		<div class="padding-1 noborder hori center gap-10 width-100p shadow margin-b1">
			<input type="text" name="" id="" class="fs dark4-t regular-t medi-t" />
			<img src={search} alt="" />
		</div>
		<div class="padding-v1 padding-h0 vert gap-10">
			<h1 class="large-t bold-t dark4-t margin-1v">추천</h1>
			<div class="recommend hori width-100p gap-10">
				{#each recommendResult as re}
					<ResearchCardRecommend width={'width-100p'} {re} />
				{/each}
			</div>
		</div>
		<div class="padding-v1 padding-h0 hori gap-10">
			<div class="vert gap-10 width-70p">
				<h1 class="large-t bold-t dark4-t margin-1v">들어온 제안들</h1>
			</div>
			<div class="vert gap-10 width-30p">
				<h1 class="large-t bold-t dark4-t margin-1v">활동 요약</h1>
			</div>
		</div>
	</div>
</div>
