<script lang="ts">
	import { research1, research2, research3 } from '$lib/script/example';
	const researchList: Research[] = [research1, research2, research3];
	let searchList: Research[] | undefined = $state();
	let filters: string[] = $state(['hello']);

	import search from '$lib/assets/icon/search.svg';
	import filter from '$lib/assets/icon/filter.svg';
	import deleteI from '$lib/assets/icon/delete.svg';
	import map from '$lib/assets/icon/map.svg';
	import calendar from '$lib/assets/icon/calendar.svg';
	import view from '$lib/assets/icon/visibility.svg';
	import bookmark from '$lib/assets/icon/scrap.svg';
	import bookmark_filled from '$lib/assets/icon/scrap_filled.svg';

	let bookmarked: number[] = $state([0, 0, 0]);
</script>

<div
	class="padding-10a border-round border-dark1 border-1 border-solid flex-row flex-start-j flex-center-a gap-10"
>
	<img src={search} alt="" class="icon-large" />
	<input type="text" name="" id="" class="dark5-t text-regular text-medium width-80p padding-5a" />
</div>
<div class="flex-row gap-10">
	<button class="border-dark1 border-1 border-solid border-round padding-10a flex-center">
		<img src={filter} alt="" class="icon-medium" />
	</button>
	{#each filters as item}
		<button class="border-dark1 border-1 border-solid border-round padding-10a flex-center gap-5">
			<img src={deleteI} alt="" class="icon-medium" />
			<p class="dark5-t text-regular text-small">{item}</p>
		</button>
	{/each}
</div>
<div class="flex-column gap-10">
	{#each researchList as item, idx}
		<div class="flex-row padding-10a border-round border-1 border-dark1 border-solid gap-10">
			<div>
				<img src={item.picture} alt="" class="img-large border-round" />
			</div>
			<div class="flex-column gap-5">
				<p class="text-large dark5-t text-bold ellipsis line-1">{item.title}</p>
				<p class="text-regular dark3-t text-reuglar ellipsis line-1">{item.user.username}</p>
				<p class="text-small dark2-t text-regular">
					<img src={map} alt="" class="icon-small" />
					{item.user.affiliation} | <img src={calendar} alt="" class="icon-small" />
					{item.date} | <img src={view} alt="" class="icon-small" />
					{item.view}
				</p>
			</div>
			<div class="margin-al">
				<button
					onclick={() => {
						bookmarked[idx] = bookmarked[idx] ? 0 : 1;
					}}
				>
					{#if bookmarked[idx]}
						<img src={bookmark_filled} alt="" class="icon-regular" />
					{:else}
						<img src={bookmark} alt="" class="icon-regular" />
					{/if}
				</button>
			</div>
		</div>
	{/each}
</div>
<div class="flex-column height-100p padding-30a">
	
</div>