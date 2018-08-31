<template>
	<div class="tab" style="height:100%;">
		<view-box ref="viewBox">
			<router-view></router-view>
		</view-box>
		<tabbar slot="bottom" style="position: fixed;"  tabbar-text-active-color=#FD6D1F>
			<tabbar-item :selected="selected == 'Home'" link="/Home">
        <img slot="icon" style="height: 18px;width: 18px" src="../../assets/images/share/chat.png">
				<div slot="label" style="margin-top: -16px; font-size: 10px;">首頁</div>
			</tabbar-item>
			<tabbar-item :selected="selected == 'Classify'" link="/Classify">
        <img slot="icon" style="height: 18px;width: 18px" src="../../assets/images/share/chat.png">
				<div slot="label" style="margin-top: -16px;font-size: 10px;">消息</div>
			</tabbar-item>
			<tabbar-item :selected="selected == 'Push'" link="/Push/MustPush">
        <img slot="icon" style="height: 18px;width: 18px" src="../../assets/images/share/chat.png">
				<div slot="label" style="margin-top: -16px;font-size: 10px;">问同行</div>
			</tabbar-item>
			<tabbar-item :selected="selected == 'myorder'" link="/myorder">
        <img slot="icon" style="height: 18px;width: 18px" src="../../assets/images/share/chat.png">
				<div slot="label" style="margin-top: -16px;font-size: 10px;">购物车</div>
			</tabbar-item>
			<tabbar-item :selected="selected == 'My'" link="/My">
        <img slot="icon" style="height: 18px;width: 18px" src="../../assets/images/share/chat.png">
        <img slot="icon-active" style="height: 18px;width: 18px" src="../../assets/images/share/mywindmill_interlocution.png">
        <div slot="label" style="margin-top: -16px;font-size: 10px;">我的风车</div>
			</tabbar-item>
		</tabbar>
	</div>
</template>

<script>
	import { ViewBox, Tabbar, TabbarItem } from 'vux'
	export default {
		name: 'tab',
		data() {
			return {
				selected: 'My', //选项卡选中状态
			}
		},
		mounted() {
			let to = this.$route.name;
			//console.log(to)
			if(to == 'Home') {
				this.selected = 'Home';
			} else if(to == 'Message') {
				this.selected = 'Message';
			} else if(to == 'ClassifyDetail') {
				this.selected = 'Classify';
			} else if(to == 'MustPush') {
				this.selected = 'Push';
			} else if(to == 'SaleDetails') {
				this.selected = 'Push';
			} else if(to == 'PersonalCenter') {
				this.selected = 'Push';
			} else if(to == 'myorder') {
				this.selected = 'myorder';
			} else if(to == 'My') {
				this.selected = 'My';
			}
		},
		watch: {

		},
		components: {
			ViewBox,
			Tabbar,
			TabbarItem
		}
	}
</script>

<style scoped>
	html,
	body {
		height: 100%;
		width: 100%;
		overflow-x: hidden;
	}

	.weui-tabbar {
		background-color: #FFFFFF;
    height: 49px;
	}


</style>
