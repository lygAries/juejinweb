<template>
	<div class="homewhole">
		<div class='topmanu'>
			<img src="../logo.png" class="toplogo" />
			<div>
				<ul class="topul">
					<li>首页</li>
					<li>沸点</li>
					<li>课程</li>
					<li>直播</li>
					<li>活动</li>
					<li>商城</li>
					<li>APP</li>
					<li>插件</li>
				</ul>
			</div>

			<div class="topinputbox">
				<input class="topinput" />
				<div class="searchbtnbox">
					<img class="searchbtn"
						src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg" />
				</div>
			</div>

			<div class="creatbtnbox">
				<button type="button" class="creatbtn">创作者中心</button>
			</div>
			<div class="vipbox">
				<img src="../vip.png" class="vipimg">会员
			</div>
			<img src="../bell.png" width="20px" style="margin-left: 25px;" />
			<div style="color: #0055ff;margin-left: 20px;">登录</div>
		</div>
		
		<router-view></router-view>
	</div>
</template>

<script>
	export default {

		data() {
			return {

			}
		},
		methods: {

		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.homewhole {
		background-color: #f7f7f7;
	}

	.topmanu {
		height: 60px;
		background-color: white;
		text-align: center;
		line-height: 60px;
		display: flex;
		align-items: center;
	}

	.toplogo {
		width: 108px;
		height: 25px;
		margin-left: 62px;
	}

	.topul li {
		float: left;
		text-align: center;
		color: #4a4a4a;
		font-size: 14px;
		margin-left: 23px;
		border: 2px solid transparent;
		list-style: none;
	}

	.topul li:first-child {
		color: #0000FF;
	}

	.topul li:hover {
		border-bottom: 2px solid #0037DA;
		cursor: pointer;
	}

	.topinputbox {
		height: 29px;
		border-radius: 5px;
		border: 1px solid #d5d5d5;
		padding: 2px;
		display: flex;
		margin-left: 160px;
	}

	.topinput {
		width: 300px;
		border: none;
		outline: none;
		padding: 7px;
		color: #7d7d7d;
	}

	.topinputbox:hover {
		border: 1px solid #8b8b8b;
	}

	.searchbtnbox {
		width: 44px;
		height: 29px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #f1f1f1;
		border-radius: 3px;
	}

	.searchbtn {
		width: 15px;
		height: 15px;
	}

	.creatbtnbox {
		margin-left: 25px;
	}

	.creatbtn {
		width: 110px;
		height: 35px;
		border: none;
		color: white;
		border-radius: 4px;
		background-color: #1e80ff;
		font-size: 15px;
	}

	.vipbox {
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #9e9e9e;
		margin-left: 25px;
	}

	.vipimg {
		width: 23px;
		height: 23px;
	}
</style>
