<script lang="ts">
	import logo from '$lib/assets/img/logo_text_primary.svg';
	import person from '$lib/assets/icon/certification_mobile.svg';
	import password from '$lib/assets/icon/login_id_password.svg';
	import login from '$lib/assets/icon/login_white.svg';

	import { user } from '$lib/script/example';

	let userData: User = user;
	let inputData: string[] = ['', ''];
</script>

<div class="fullsize flex-column flex-center">
	<div class="width-30p flex-column gap-10 flex-center">
		<img src={logo} alt="" class="img-medium" />
		<div
			class="width-100p padding-10a border-round border-dark1 border-1 border-solid flex-row flex-start-j flex-center-a gap-10"
		>
			<img src={person} alt="" class="icon-regular" />
			<input
				type="text"
				placeholder="아이디"
				name=""
				id=""
				class="dark5-t text-regular text-medium width-100p"
				bind:value={inputData[0]}
			/>
		</div>
		<div
			class="width-100p padding-10a border-round border-dark1 border-1 border-solid flex-row flex-start-j flex-center-a gap-10"
		>
			<img src={password} alt="" class="icon-regular" />
			<input
				type="password"
				placeholder="비밀번호"
				name=""
				id=""
				class="dark5-t text-regular text-medium width-100p"
				bind:value={inputData[1]}
			/>
		</div>
		{#if inputData[0] === userData.username && inputData[1] === userData.password}
			<a
				href="/main"
				class="flex-center width-100p padding-10a border-round primary-button flex-row flex-start-j flex-center-a gap-10"
			>
				<img src={login} alt="" class="icon-regular" />
				<p class="text-medium">로그인</p>
			</a>
		{:else}
			<button
				class="flex-center width-100p padding-10a border-round primary-button flex-row flex-start-j flex-center-a gap-10"
				onclick={() => {
					alert('입력이 잘못되었습니다.');
				}}
			>
				<img src={login} alt="" class="icon-regular" />
				<p class="text-medium">로그인</p>
			</button>
		{/if}
	</div>
</div>
