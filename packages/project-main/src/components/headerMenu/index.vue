<template>
	<ElMenu default-active="2" class="elMenu-demo" mode="horizontal">
		<ElSubMenu index="1">
			<template #title>
				<Elicon><location /></Elicon>
				<span>Navigator One</span>
			</template>
			<ElMenuItemGroup title="Group One">
				<ElMenuItem index="1-1">item one</ElMenuItem>
				<ElMenuItem index="1-2">item one</ElMenuItem>
			</ElMenuItemGroup>
			<ElMenuItemGroup title="Group Two">
				<ElMenuItem index="1-3">item three</ElMenuItem>
			</ElMenuItemGroup>
			<ElSubMenu index="1-4">
				<template #title>item four</template>
				<ElMenuItem index="1-4-1">item one</ElMenuItem>
			</ElSubMenu>
		</ElSubMenu>
	</ElMenu>
</template>
