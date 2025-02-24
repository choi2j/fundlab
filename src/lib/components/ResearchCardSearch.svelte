<script lang="ts">
	import '$lib/style.css';

	import map from '$lib/assets/icon/map.svg';
	import calendar from '$lib/assets/icon/calendar.svg';
	import view from '$lib/assets/icon/visibility.svg';
	import bookmark from '$lib/assets/icon/bookmarks.svg';

	let { width, re, selected = $bindable() } = $props();
</script>

<div class="hori noborder shadow padding-1 {width} gap-10">
	<img src={re.thumbnail} alt="" class="height-5 noborder" />
	<div class="vert gap-3">
		<button
			class="large-t bold-t dark4-t margin-ra"
			onclick={() => {
				selected = re;
			}}>{re.title}</button
		>
		<p class="regular-t semi-t dark2-t">{re.who}</p>
		<div class="hori gap-3 center-a">
			<img src={map} alt="" class="small-icon" />
			<p class="small-t medi-t dark2-t">
				{re.where} |
			</p>
			<img src={calendar} alt="" class="small-icon" />
			<p class="small-t medi-t dark2-t">
				{re.when} |
			</p>
			<img src={view} alt="" class="small-icon" />
			<p class="small-t medi-t dark2-t">
				{re.views}
			</p>
		</div>
	</div>
	<div class="recommend-function hori gap-3 margin-la center-a height-fit">
		<button><img src={bookmark} alt="" class="large-icon"/></button>
	</div>
</div>
