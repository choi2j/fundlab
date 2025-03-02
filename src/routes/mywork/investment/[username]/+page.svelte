<script lang="ts">
	import type { PageProps } from '../$types';
	let data: PageProps = $props();
</script>

<div class="padding-30a flex-column fullsize gap-10">
    {data.data}
</div>
