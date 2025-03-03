<script lang="ts">
	import logo from '$lib/assets/img/logo_text_primary.svg';
	import person from '$lib/assets/icon/certification_mobile.svg';
	import password from '$lib/assets/icon/login_id_password.svg';
	import mail from '$lib/assets/icon/mail.svg';
	import calendar from '$lib/assets/icon/calendar.svg';
	import cert from '$lib/assets/icon/certification_simple_white.svg';
	import login from '$lib/assets/icon/login_white.svg';

	let type: number = 0;

	function changeType() {
		type = type ? 0 : 1;
	}
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
				class="dark5-t text-regular text-medium width-80p padding-5a"
			/>
		</div>
		<div
			class="width-100p padding-10a border-round border-dark1 border-1 border-solid flex-row flex-start-j flex-center-a gap-10"
		>
			<img src={mail} alt="" class="icon-regular" />
			<input
				type="text"
				placeholder="이메일"
				name=""
				id=""
				class="dark5-t text-regular text-medium width-80p padding-5a"
			/>
			<button class="dark1-button nowrap padding-5a margin-la">인증</button>
		</div>
		<div
			class="width-100p padding-10a border-round border-dark1 border-1 border-solid flex-row flex-start-j flex-center-a gap-10"
		>
			<img src={mail} alt="" class="icon-regular" />
			<input
				type="text"
				placeholder="인증번호"
				name=""
				id=""
				class="dark5-t text-regular text-medium width-80p padding-5a"
			/>
		</div>
		<div
			class="width-100p padding-10a border-round border-dark1 border-1 border-solid flex-row flex-start-j flex-center-a gap-10"
		>
			<img src={calendar} alt="" class="icon-regular" />
			<input
				type="date"
				placeholder="생년월일"
				name=""
				id=""
				class="dark5-t text-regular text-medium padding-5a"
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
				class="dark5-t text-regular text-medium width-80p padding-5a"
			/>
		</div>
		<div
			class="width-100p padding-10a border-round border-dark1 border-1 border-solid flex-row flex-start-j flex-center-a gap-10"
		>
			<img src={password} alt="" class="icon-regular" />
			<input
				type="password"
				placeholder="비밀번호 확인"
				name=""
				id=""
				class="dark5-t text-regular text-medium width-80p padding-5a"
			/>
		</div>
		<div class="width-100p flex-row gap-10">
			{#if type === 1}
				<button
					onclick={() => {
						changeType();
					}}
					class="width-50p padding-10a border-round border-dark1 border-1 border-solid flex-center-a"
					>연구자</button
				>
				<button
					onclick={() => {
						changeType();
					}}
					class="width-50p padding-10a border-round dark1-button flex-center-a"
					>투자자</button
				>
			{:else if type === 0}
				<button
					onclick={() => {
						changeType();
					}}
					class="width-50p padding-10a border-round dark1-button flex-center-a"
					>연구자</button
				>
				<button
					onclick={() => {
						changeType();
					}}
					class="width-50p padding-10a border-round border-dark1 border-1 border-solid flex-center-a"
					>투자자</button
				>
			{/if}
		</div>
		<a
			href="/main"
			class="flex-center width-100p padding-10a border-round secondary-button flex-row flex-start-j flex-center-a gap-10"
		>
			<img src={cert} alt="" class="icon-regular" />
			<p class="text-semi">간편인증</p>
		</a>
		<a
			href="/signin"
			class="flex-center width-100p padding-10a border-round primary-button flex-row flex-start-j flex-center-a gap-10"
		>
			<img src={login} alt="" class="icon-regular" />
			<p class="text-semi">로그인</p>
		</a>
	</div>
</div>
