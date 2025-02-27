<script lang="ts">
	import '$lib/style.css';

	import logo from '$lib/assets/img/logo_text_primary.svg';
	import person from '$lib/assets/icon/certification_mobile.svg';
	import calendar from '$lib/assets/icon/calendar.svg';
	import pass from '$lib/assets/icon/login_id_password.svg';
	import cert from '$lib/assets/icon/certification_simple_white.svg';
	import login from '$lib/assets/icon/login_white.svg';
	import { enhance } from "$app/forms";
	import { email } from '$lib/store';
	console.log($email);
	let formData = {
		email: $email,
	};
	function handleSubmit() {
		email.set(formData.email);
	}
</script>

<div class="center fs vert gap-5">
	<img src={logo} alt="" class="xxlarge-icon margin-b1" />
	<div class="padding-1 hori gap-5 width-20 dark1-border-2">
		<img src={person} alt="" class="large-icon" />
		<input type="text" name="" id="" class="regular-t" placeholder="아이디" />
	</div>
	<div class="padding-1 hori gap-5 width-20 dark1-border-2">
		<img src={person} alt="" class="large-icon" />
		<form method="POST" action="?/register" use:enhance on:submit={handleSubmit}>
			<input type="email" name="target" id="" class="regular-t" placeholder="mailaddress" bind:value={formData.email} />
			<button class="dark2-t small-t semi-t" name="action" value="sendMail" type="submit">인증</button>
		</form>
	</div>
	<div class="padding-1 hori gap-5 width-20 dark1-border-2">
		<img src={person} alt="" class="large-icon" />
		<form method="POST" action="?/verify" use:enhance>
			<input type="text" name="verifyNumber" id="inputNum" class="regular-t" placeholder="인증번호" />
			<button class="dark2-t small-t semi-t" name="action" value="sendNumber" type="submit">확인</button>
		</form>

	</div>
	<div class="padding-1 hori center gap-5 width-20 dark1-border-2">
		<img src={calendar} alt="" class="large-icon" />
		<input type="date" name="" id="" class="regular-t fs" data-placeholder="생년월일" />
	</div>
	<div class="padding-1 hori gap-5 width-20 dark1-border-2">
		<img src={pass} alt="" class="large-icon" />
		<input type="password" name="" id="" class="regular-t" placeholder="비밀번호" />
	</div>
	<div class="padding-1 hori gap-5 width-20 dark1-border-2">
		<img src={pass} alt="" class="large-icon" />
		<input type="password" name="" id="" class="regular-t" placeholder="비밀번호 확인" />
	</div>
	<div class="hori gap-5 width-20">
		<button class="dark2-back width-100p padding-v1">
			<p class="regular-t semi-t white-t">교수</p>
		</button>
		<button class="dark2-back width-100p padding-v1">
			<p class="regular-t semi-t white-t">투자자</p>
		</button>
	</div>
	<button class="padding-h3 padding-v1 primary-back gap-5 width-20">
		<img src={cert} alt="" class="large-icon" />
		<p class="regular-t semi-t white-t">본인인증</p>
	</button>
	<a href="/main" class="padding-h3 padding-v1 secondary-back gap-5 width-20">
		<img src={login} alt="" class="large-icon" />
		<p class="regular-t semi-t white-t">회원가입</p>
	</a>
	<a href="/signin" class="margin-t1">
		<p class="dark2-t regular-t medi-t">로그인</p>
	</a>
</div>
