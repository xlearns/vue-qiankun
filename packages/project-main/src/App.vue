<script setup lang="ts">
import SideMenu from "@/components/sideMenu/index.vue";
import HeaderMenu from "@/components/headerMenu/index.vue";
</script>

<template>
	<ElContainer style="height: calc(100vh - 68px)">
		<ElHeader class="app-header"> <HeaderMenu /> </ElHeader>
		<ElContainer style="overflow: auto">
			<ElAside style="box-shadow: 0 2px 10px #f1f1f1; width: 250px">
				<SideMenu />
			</ElAside>
			<ElMain class="layoutbox">
				<div class="main-wrapper" style="position: relative; height: 100%">
					<router-view></router-view>
					<div id="mainwrapper"></div>
				</div>
			</ElMain>
		</ElContainer>
	</ElContainer>
</template>
