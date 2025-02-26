<script lang="ts">
	import '$lib/style.css';

	import logo from '$lib/assets/img/logo_text_primary.svg';
	import home from '$lib/assets/icon/location_away.svg';
	import search from '$lib/assets/icon/search.svg';
	import document from '$lib/assets/icon/document.svg';
	import inquiry from '$lib/assets/icon/inquiry.svg';
	import myinfo from '$lib/assets/icon/myinfo.svg';

	let { pathname, userState } = $props();
</script>

<div class="vert padding-3 shadow">
	<img src={logo} alt="" class="xlarge-icon margin-b2" />
	<ul class="vert padding-1 gap-10">
		<li>
			<a href="/main" class="hori gap-10">
				<img src={home} alt="" class="large-icon" />
				{#if pathname === '/main'}
					<p class="regular-t dark4-t bold-t">메인화면</p>
				{:else}
					<p class="regular-t dark2-t semi-t">메인화면</p>
				{/if}
			</a>
		</li>
		<li>
			<a href="/search/research" class="hori gap-10">
				<img src={search} alt="" class="large-icon" />
				{#if pathname === '/search/research'}
					<p class="regular-t dark4-t bold-t">연구탐색</p>
				{:else}
					<p class="regular-t dark2-t semi-t">연구탐색</p>
				{/if}
			</a>
		</li>
		<li>
			<a href="/search/invest" class="hori gap-10">
				<img src={search} alt="" class="large-icon" />
				{#if pathname === '/search/invest'}
					<p class="regular-t dark4-t bold-t">투자탐색</p>
				{:else}
					<p class="regular-t dark2-t semi-t">투자탐색</p>
				{/if}
			</a>
		</li>
		<li>
			{#if userState === 'prof'}
				<a href="/activity/prof" class="hori gap-10">
					<img src={document} alt="" class="large-icon" />
					{#if pathname === '/activity/prof' || '/activity/inve'}
						<p class="regular-t dark4-t bold-t">내 활동</p>
					{:else}
						<p class="regular-t dark2-t semi-t">내 활동</p>
					{/if}
				</a>
			{:else}
				<a href="/activity/inve" class="hori gap-10">
					<img src={document} alt="" class="large-icon" />
					{#if pathname === '/activity'}
						<p class="regular-t dark4-t bold-t">내 활동</p>
					{:else}
						<p class="regular-t dark2-t semi-t">내 활동</p>
					{/if}
				</a>
			{/if}
		</li>
		<li>
			<a href="/message" class="hori gap-10">
				<img src={inquiry} alt="" class="large-icon" />
				{#if pathname === '/message'}
					<p class="regular-t dark4-t bold-t">메시지</p>
				{:else}
					<p class="regular-t dark2-t semi-t">메시지</p>
				{/if}
			</a>
		</li>
		<li>
			<a href="/myinfo" class="hori gap-10">
				<img src={myinfo} alt="" class="large-icon" />
				{#if pathname === '/myinfo'}
					<p class="regular-t dark4-t bold-t">내 정보</p>
				{:else}
					<p class="regular-t dark2-t semi-t">내 정보</p>
				{/if}
			</a>
		</li>
	</ul>
	<a href="/" class="width-100p center margin-ta">
		<p class="regular-t dark2-t thin-t">로그아웃</p>
	</a>
</div>
