<script lang="ts">
	import { userCheck1, userCheck2, userCheck3 } from '$lib/script/example';
	let currentUser: UserCheck = userCheck1;
	let users: UserCheck[] = [userCheck1, userCheck2, userCheck3];
	let otherUsers: UserCheck[] = [userCheck2, userCheck3];
	let messages: Message[] = [
		{
			user: users[0].username,
			message: 'Hello, I would like to talk about your research.',
			date: new Date('2025-01-15')
		},
		{
			user: users[1].username,
			message: 'Hello, I would like to talk about your research.',
			date: new Date('2025-01-15')
		},
		{
			user: users[2].username,
			message: 'Hello, I would like to talk about your research.',
			date: new Date('2025-01-15')
		}
	];
	let selected: UserCheck | undefined;
	function changeSelection(select: UserCheck) {
		selected = select;
	}
</script>

<div class="flex-row fullsize gap-10">
	<div class="width-20p height-100p padding-30a border-1 border-solid border-dark1">
		{#each otherUsers as item}
			{#if selected === item}
				<button
					onclick={() => {
						changeSelection(item);
					}}
					class="dark1-bc padding-10a height-5r width-100p border-sharp flex-end-j flex-center-a"
				>
					<p class="text-medium text-semi dark5-t width-fit">
						{item.username}
					</p>
				</button>
			{:else}
				<button
					onclick={() => {
						changeSelection(item);
					}}
					class="white-bc padding-10a height-5r width-100p border-1 border-dark1 border-solid border-sharp flex-start-j flex-start-a"
				>
					<p class="text-medium text-semi dark5-t width-fit">
						{item.username}
					</p>
				</button>
			{/if}
		{/each}
	</div>
	<div class="width-80p height-100p padding-30a gap-10">
		<div class="height-80p width-100p overflow-y gap-10 flex-column">
			{#each messages as item}
				{#if item.user === selected?.username}
					<div class="padding-10a dark1-bc width-fit border-round">
						<p class="width-fit text-bold">{item.user}</p>
						<p class="width-fit">{item.message}</p>
					</div>
				{:else if item.user === currentUser.username}
					<div class="padding-10a dark1-bc width-fit margin-al border-round">
						<p class="width-fit text-bold">{item.user}</p>
						<p class="width-fit">{item.message}</p>
					</div>
				{/if}
			{/each}
		</div>
		<div class="height-20p width-100p">
			<div
				class="padding-10a border-round border-dark1 border-1 border-solid flex-row flex-start-j flex-center-a gap-10"
			>
				<input
					type="text"
					name=""
					id=""
					class="dark5-t text-regular text-medium width-80p padding-5a"
				/>
			</div>
		</div>
	</div>
</div>
