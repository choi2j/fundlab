<script lang="ts">
	import '$lib/style.css';

    import logo from '$lib/assets/img/logo_text_primary.svg'
    import person from '$lib/assets/icon/certification_mobile.svg'
    import pass from '$lib/assets/icon/login_id_password.svg';
	import cert from '$lib/assets/icon/certification_simple_white.svg';
	import login from '$lib/assets/icon/login_white.svg';
</script>

<div class="center fs vert gap-5">
    <img src={logo} alt="" class="xxlarge-icon margin-b1">
	<div class="padding-1 hori gap-5 width-20 dark1-border-2">
        <img src={person} alt="" class="large-icon">
		<input type="text" name="" id="" class="regular-t" placeholder="아이디"/>
	</div>
	<div class="padding-1 hori gap-5 width-20 dark1-border-2">
        <img src={pass} alt="" class="large-icon">
		<input type="password" name="" id="" class="regular-t" placeholder="비밀번호"/>
	</div>
	<button class="padding-h3 padding-v1 primary-back gap-5 width-20">
		<img src={cert} alt="" class="large-icon" />
		<p class="regular-t semi-t white-t">본인인증</p>
	</button>
	<a href="/main" class="padding-h3 padding-v1 secondary-back gap-5 width-20">
		<img src={login} alt="" class="large-icon" />
		<p class="regular-t semi-t white-t">로그인</p>
	</a>
    <a href="/signup" class="margin-t1">
        <p class="dark2-t regular-t medi-t">회원가입</p>
    </a>
</div>
