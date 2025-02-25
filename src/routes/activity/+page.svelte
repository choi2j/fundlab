<script lang="ts">
	import '$lib/style.css';

	import { page } from '$app/state';

	import Navbar from '$lib/components/Navbar.svelte';

	let pathname = $state(page.url.pathname);
</script>

<div class="fs hori">
	<Navbar {pathname} />
	<div class="vert fs padding-3">
		<div class="hori width-100p height-70p">
			<div class="vert width-50p">
				<h1 class="large-t bold-t dark4-t">내가 작성한 연구</h1>
			</div>
			<div class="vert width-50p">
				<h1 class="large-t bold-t dark4-t">북마크</h1>
			</div>
		</div>
		<div class="hori width-100p height-30p">
			<div class="vert width-100p">
				<h1 class="large-t bold-t dark4-t">새 연구 작성</h1>
			</div>
		</div>
	</div>
</div>
