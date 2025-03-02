<script lang="ts">
	import logo from '$lib/assets/img/logo_text_primary.svg';

	import home from '$lib/assets/icon/location_away.svg';
	import search from '$lib/assets/icon/search.svg';
	import document from '$lib/assets/icon/document.svg';
	import inquiry from '$lib/assets/icon/inquiry.svg';
	import myinfo from '$lib/assets/icon/myinfo.svg';

	let { pathname, user } = $props();
</script>

<nav class="flex-column height-100p padding-30a shadow">
	<div class="width-100p">
		<img src={logo} alt="" class="img-small" />
	</div>
	<div class="width-100p flex-column flex-start-a gap-5 margin-20v">
		<a href="/main" class="flex-row flex-center gap-5 padding-10a">
			<img src={home} alt="" class="icon-regular" />
			{#if pathname == '/main'}
				<p class="dark5-t text-bold text-medi">메인화면</p>
			{:else}
				<p class="dark3-t text-semi text-medi">메인화면</p>
			{/if}
		</a>
		<a href="/search/research" class="flex-row flex-center gap-5 padding-10a">
			<img src={search} alt="" class="icon-regular" />
			{#if pathname == '/search/research'}
				<p class="dark5-t text-bold text-medi">연구찾기</p>
			{:else}
				<p class="dark3-t text-semi text-medi">연구찾기</p>
			{/if}
		</a>
		<a href="/search/investment" class="flex-row flex-center gap-5 padding-10a">
			<img src={search} alt="" class="icon-regular" />
			{#if pathname == '/search/investment'}
				<p class="dark5-t text-bold text-medi">투자찾기</p>
			{:else}
				<p class="dark3-t text-semi text-medi">투자찾기</p>
			{/if}
		</a>
		{#if user.usertype === 'researcher'}
			<a href="/mywork/research/{user.username}" class="flex-row flex-center gap-5 padding-10a">
				<img src={document} alt="" class="icon-regular" />
				{#if pathname == `/mywork/research/${user.username}`}
					<p class="dark5-t text-bold text-medi">내 활동</p>
				{:else}
					<p class="dark3-t text-semi text-medi">내 활동</p>
				{/if}
			</a>
		{:else}
			<a href="/mywork/investment/{user.username}" class="flex-row flex-center gap-5 padding-10a">
				<img src={document} alt="" class="icon-regular" />
				{#if pathname == `/mywork/investment/${user.username}`}
					<p class="dark5-t text-bold text-medi">내 활동</p>
				{:else}
					<p class="dark3-t text-semi text-medi">내 활동</p>
				{/if}
			</a>
		{/if}
		<a href="/message" class="flex-row flex-center gap-5 padding-10a">
			<img src={inquiry} alt="" class="icon-regular" />
			{#if pathname == '/message'}
				<p class="dark5-t text-bold text-medi">메세지</p>
			{:else}
				<p class="dark3-t text-semi text-medi">메세지</p>
			{/if}
		</a>
		<a href="/profile/{user.username}" class="flex-row flex-center gap-5 padding-10a">
			<img src={myinfo} alt="" class="icon-regular" />
			{#if pathname == `/profile/${user.username}`}
				<p class="dark5-t text-bold text-medi">내 정보</p>
			{:else}
				<p class="dark3-t text-semi text-medi">내 정보</p>
			{/if}
		</a>
	</div>
	<div class="width-100p flex-center margin-at">
		<a href="/" class="margin-ta">
			<p class="dark2-t text-semi text-small">로그아웃</p>
		</a>
	</div>
</nav>
