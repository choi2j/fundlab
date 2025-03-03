<script lang="ts">
	import { userCheck1, userCheck2, userCheck3 } from '$lib/script/example';
	let currentUser: UserCheck = userCheck1;
	let users: UserCheck[] = [userCheck1, userCheck2, userCheck3];
	let otherUsers: UserCheck[] = [userCheck2, userCheck3];
	let messages: Message[] = [
		{
			user: users[1].username,
			message:
				'박 연구원님, 저희가 귀하의 AI 신약 개발 프로젝트에 대해 검토하고 있습니다. 현재 어느 단계까지 연구가 진행되었나요?',
			date: new Date('2025-01-15')
		},
		{
			user: users[0].username,
			message:
				'네, 현재 AI를 활용한 후보 물질 발굴 모델을 개발했고, 이를 통해 기존보다 40% 빠르게 유망한 화합물을 찾아낼 수 있었습니다. 지금은 실제 실험을 통해 모델의 정확도를 검증하는 단계입니다.',
			date: new Date('2025-01-15')
		},
		{
			user: users[1].username,
			message:
				'흥미롭군요. 그럼 현재 필요한 펀딩 규모와 구체적인 사용 계획을 설명해 주실 수 있을까요?',
			date: new Date('2025-01-15')
		},
		{
			user: users[0].username,
			message:
				'이번 단계에서는 약 50억 원 규모의 펀딩이 필요합니다. 주요 사용처는 (1) 실험 데이터 확보, (2) 습득한 데이터를 기반으로 AI 모델 개선, (3) 초기 임상 시험 준비입니다. 이를 통해 신약 후보 물질의 효능을 검증하는 데 집중할 계획입니다.',
			date: new Date('2025-01-15')
		},
		{
			user: users[1].username,
			message:
				'초기 임상까지 진행하려면 추가적인 자금 조달이 필요할 가능성이 있겠네요. 만약 저희가 투자를 한다면, 어느 정도의 기간 내에 상업화 가능성이 있다고 보십니까?',
			date: new Date('2025-01-15')
		},
		{
			user: users[0].username,
			message:
				'초기 임상까지는 약 2~3년을 예상하고 있으며, 이후 규제 승인 및 후속 임상 시험을 거쳐 상업화까지는 최소 5~7년이 필요할 것으로 보고 있습니다. 다만, 저희 AI 기술이 약물 발굴 속도를 획기적으로 단축할 수 있기 때문에 기존 방식보다 빠른 진행이 가능합니다.',
			date: new Date('2025-01-15')
		},
		{
			user: users[1].username,
			message:
				'이해했습니다. 그럼 투자자 입장에서 기대할 수 있는 수익 모델에 대해서도 설명해 주시겠어요?',
			date: new Date('2025-01-15')
		},
		{
			user: users[0].username,
			message:
				'저희는 두 가지 모델을 고려하고 있습니다. 첫 번째는 제약사와의 라이선스 계약을 통한 기술 이전이고, 두 번째는 신약 개발을 직접 진행하여 지분 기반의 수익을 창출하는 방식입니다. 투자자분들께는 단계별로 리스크를 분산할 수 있는 구조를 제공할 예정입니다.',
			date: new Date('2025-01-15')
		},
		{
			user: users[1].username,
			message:
				'듣고 보니 충분히 매력적인 프로젝트군요. 내부 검토 후 추가 논의를 위해 다시 연락드리겠습니다.',
			date: new Date('2025-01-15')
		},
		{
			user: users[0].username,
			message: '감사합니다. 긍정적인 검토 부탁드립니다.',
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
					<div class="padding-10a dark1-bc width-fit margin-al border-round width-50r">
						<p class="width-fit text-bold">{item.user}</p>
						<p class="width-fit">{item.message}</p>
					</div>
				{/if}
			{/each}
		</div>
		<div class="height-20p width-100p padding-10a margin-at">
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
