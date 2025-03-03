<script lang="ts">
	import { user } from '$lib/script/example';
	let { data } = $props();

	console.log(data.username);
</script>

<div class="padding-30a fullsize flex-column">
	<div class="width-100p flex-row gap-10">
		<img src={user.picture} alt="" class="height-10r width-10r border-round" />
		<div class="flex-column gap-10">
			<p class="text-xlarge text-bold dark5-t">{user.username} 님 안녕하세요!</p>
            <p class="text-regular text-semi dark3-t">{user.affiliation} 소속 연구원</p>
		</div>
	</div>
</div>

