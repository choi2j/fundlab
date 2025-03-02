<script lang="ts">
	import { research1, research2, research3 } from '$lib/script/example';
	const itemList: Research[] = [research1, research2, research3, research1, research2, research3];
	import map from '$lib/assets/icon/map.svg';
	import calendar from '$lib/assets/icon/calendar.svg';
	import view from '$lib/assets/icon/visibility.svg';
	import bookmark from '$lib/assets/icon/scrap.svg';
	import bookmark_filled from '$lib/assets/icon/scrap_filled.svg';

	let { data } = $props();

	console.log(data.username);
</script>

<div class="padding-30a flex-column fullsize gap-10">
	<p class="text-large dark5-t text-bold">{data.username} 님 안녕하세요!</p>
	<div class="flex-column gap-10">
		<p class="text-bold text-large dark5-t">내가 작성한 연구</p>
		<div class="flex-column gap-10 overflow-y height-70p">
			{#each itemList as item}
				<div class="flex-row padding-10a border-round border-1 border-dark1 border-solid gap-10">
					<div class="flex-column gap-5">
						<a
							class="width-fit"
                            href="/mywork/research/{item.id}"
						>
							<p class="text-large dark5-t text-bold ellipsis line-1">{item.title}</p>
						</a>
						<p class="text-regular dark3-t text-reuglar ellipsis line-1">{item.user.username}</p>
						<p class="text-small dark3-t text-regular flex-center gap-3">
							<img src={map} alt="" class="icon-small" />
							{item.user.affiliation} | <img src={calendar} alt="" class="icon-small" />
							{item.date} | <img src={view} alt="" class="icon-small" />
							{item.view}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
