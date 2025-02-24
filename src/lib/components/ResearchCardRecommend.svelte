<script lang="ts">
	import '$lib/style.css';

	import bookmark from '$lib/assets/icon/bookmarks.svg';

	let { width, re } = $props();
</script>

<div class="vert noborder shadow padding-3 {width} gap-10">
	<div class="hori gap-3">
		<p class="small-t medi-t dark2-t">{re.tag[0]} &gt; {re.tag[1]}</p>
	</div>
	<div class="vert gap-3 height-3">
		<a class="large-t bold-t dark4-t" href="search/{re.title}">{re.title}</a>
	</div>
</div>
