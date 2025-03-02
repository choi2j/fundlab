<script lang="ts">
	import { research1, research2, research3 } from '$lib/script/example';
	const researchList: Research[] = [research1, research2, research3];

	import search from '$lib/assets/icon/search.svg';
</script>

<div class="padding-10a border-round border-dark1 border-1 border-solid flex-row flex-start-j flex-center-a gap-10">
	<img src={search} alt="" class="icon-large"/>
	<input type="text" name="" id="" class="dark5-t text-regular text-medium width-80p padding-5a" />
</div>