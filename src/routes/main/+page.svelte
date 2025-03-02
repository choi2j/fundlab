<script lang="ts">
	import { research1, research2, research3 } from '$lib/script/example';
	const researchList: Research[] = [research1, research2, research3];

	import search from '$lib/assets/icon/search.svg';
</script>

<div
	class="padding-10a border-round border-dark1 border-1 border-solid flex-row flex-start-j flex-center-a gap-10"
>
	<img src={search} alt="" class="icon-regular" />
	<input type="text" name="" id="" class="dark5-t text-regular text-medium width-80p padding-5a" />
</div>
<p class="text-large text-bold dark5-t">추천</p>
<div class="flex-row flex-center-j gap-10 padding">
	{#each researchList as item}
		<div
			class="padding-30a flex-column gap-10 width-100p height-fit border-round border-dark1 border-1 border-solid"
		>
			<p class="text-small text-semi dark2-t">{item.tag[0]} &gt; {item.tag[1]}</p>
			<a href="/search/{item.worktype}/{item.id}" class="height-7r">
				<p class="text-large text-bold dark5-t ellipsis line-4 height-100p">{item.title}</p>
			</a>
		</div>
	{/each}
</div>
<p class="text-large text-bold dark5-t">최근 메세지</p>
