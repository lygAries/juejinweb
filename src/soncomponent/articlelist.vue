<template>
	<div id="app">

		<div class="sectopmenu">
			<ul class="sectopmenuul">
				<li style="color: #000FFF;">综合</li>
				<li>关注</li>
				<li>后端</li>
				<li>前端</li>
				<li>Android</li>
				<li>iOS</li>
				<li>人工智能</li>
				<li>开发工具</li>
				<li>代码人生</li>
				<li>阅读</li>
			</ul>
		</div>
		<div class="view-container container">

			<main class="container main-container with-view-nav">
				<div class="view timeline-index-view">
					<div class="timeline-container" style="margin-top: 0px">
						<div class="timeline-content">
							<div class="timeline-entry-list">
								<div class="entry-list-container">
									<header class="list-header">
										<nav role="navigation" class="list-nav">
											<ul class="nav-list left">
												<li class="nav-item active">
													<a href="/" style="font-size: 14px;">推荐</a>
												</li>
												<li class="nav-item">
													<a href="/" style="font-size: 14px;">最新</a>
												</li>
												<li class="nav-item">
													<a href="/" style="font-size: 14px;">热榜</a>
												</li>
											</ul>
											<div class="dorp-down-area"></div>
										</nav>
									</header>

									<div class="entry-list-wrap">
										<div class="entry-list list">
											<li v-for="(item,index) in list" :key="item.id" class="item"
												@click="intoarticle(item.ordernum)">
												<div class="entry">

													<div class="meta-container">
														<a class="user-message">
															<div class="popover-box user-popover">
																{{ item.nickname }}
															</div>
														</a>
														<div class="date">2月前</div>
														<div class="tag_list">
															<a class="tag">{{
                                item.labels.split(/\s+/)[0]
                              }}</a>
															<a class="tag">{{
                                item.labels.split(/\s+/)[1]
                              }}</a>
														</div>
													</div>
													<div class="content-wrapper">
														<div class="content-main">
															<div class="title-row">
																<a class="title">{{
                                  item.articletitle
                                }}</a>
															</div>
															<div class="abstract">
																<a class="">
																	<div>
																		{{item.brief_content}}
																	</div>
																</a>
															</div>
															<ul class="action-list jh-timeline-action-area">
																<li class="item view">
																	<i></i>
																	<span>{{
                                    item.readnum > 9999
                                      ? (item.readnum / 10000).toFixed(1) + "万"
                                      : item.readnum
                                  }}</span>
																</li>
																<li class="item like">
																	<i></i>
																	<span>{{
                                    item.ordernum > 9999
                                      ? (item.ordernum / 10000).toFixed(1) +
                                        "万"
                                      : item.ordernum
                                  }}</span>
																</li>
																<li class="item comment">
																	<i></i>
																	<span>{{
                                    item.commentnum > 9999
                                      ? (item.commentnum / 10000).toFixed(1) +
                                        "万"
                                      : item.commentnum
                                  }}</span>
																</li>
															</ul>
														</div>
														<img v-if="showcover(index)" :src=item.coverimg
															alt="对前端性能优化的一些小看法" class="lazy thumb" />
													</div>
												</div>
											</li>

											<div class="entry-list-dele"></div>
										</div>
									</div>
								</div>
								<div class="loading">
									<i v-show="loading" class="iconfont"></i>
									<span>{{ loading ? "正在加载中" : "已经到底啦~" }}</span>
								</div>
							</div>
							<aside class="index-aside aside">
								<div class="sidebar-block banner-block">
									<div class="banner banner">
										<a><img width="240" height="200" class="banner-image"
												src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d76f050f2f6d48f8890e4036ac4fdfb2~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
												alt="" /></a>
										<div class="ctrl-box">
											<i class="ion-close-round close-btn"></i>
											<a class="label">
												<span class="inco">投放</span>
												<span>广告</span>
											</a>
										</div>
									</div>
								</div>
								<div class="sidebar-block banner-block">
									<div class="banner banner">
										<a class="_blank">
											<img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da39b5ada1cc46f1a240e3b720012b3c~tplv-k3u1fbpfcp-no-mark:480:400:0:0.awebp?"
												width="240" height="200" class="banner-image" alt="" />
										</a>
										<div class="ctrl-box">
											<i class="ion-close-round close-btn"></i>
											<a class="label">
												<span class="inco">投放</span>
												<span>广告</span>
											</a>
										</div>
									</div>
								</div>
								<div class="
                    sidebar-block
                    app-download-sidebar-block
                    sidebar-block
                    shadow
                  ">
									<div class="block-body">
										<a>
											<div class="app-link">
												<img src="//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png"
													class="qr-img" alt="" />
												<div class="content-box">
													<div class="headline">下载稀土掘金APP</div>
													<div class="desc">一个帮助开发者成长的社区</div>
												</div>
											</div>
										</a>
									</div>
								</div>
								<div class="sidebar-block sticky-block"></div>
								<div class="sidebar-block user-block"></div>
								<div class="sidebar-block link-block"></div>
							</aside>
						</div>
					</div>
				</div>
			</main>
		</div>
		<div class="global-component-box">
			<div class="alert-list alert-list"></div>
			<div class="suspension-panel suspension-panel">
				<button title="回到顶部" class="btn to-top-btn" @click="backtotop()">
					<svg data-v-574aa814="" width="16" height="16" viewBox="0 0 16 16" fill="none"
						xmlns="http://www.w3.org/2000/svg" class="">
						<path data-v-574aa814="" fill-rule="evenodd" clip-rule="evenodd"
							d="M2.75 1C2.33579 1 2 1.33579 2 1.75C2 2.16421 2.33579 2.5 2.75 2.5H13.25C13.6642 2.5 14 2.16421 14 1.75C14 1.33579 13.6642 1 13.25 1H2.75ZM7.24407 3.87287C7.64284 3.41241 8.35716 3.41241 8.75593 3.87287L13.0622 8.84535C13.6231 9.49299 13.163 10.5 12.3063 10.5H10V14C10 14.5523 9.55228 15 9 15H7C6.44772 15 6 14.5523 6 14V10.5H3.69371C2.83696 10.5 2.37691 9.49299 2.93778 8.84535L7.24407 3.87287Z"
							fill="#8A919F"></path>
					</svg>
				</button>
				<button title="建议反馈" class="btn meiqia-btn">
					<svg data-v-574aa814="" width="16" height="16" viewBox="0 0 16 16" fill="none"
						xmlns="http://www.w3.org/2000/svg" class="icon-feedback">
						<path data-v-574aa814="" fill-rule="evenodd" clip-rule="evenodd"
							d="M1.8252 4.002C1.8252 2.80032 2.79935 1.82617 4.00102 1.82617H12.001C13.2027 1.82617 14.1768 2.80032 14.1768 4.002V9.71628C14.1768 10.918 13.2027 11.8921 12.001 11.8921H9.43308L6.92709 14.1281C6.4455 14.5578 5.68234 14.216 5.68234 13.5706V11.8921H4.00102C2.79934 11.8921 1.8252 10.918 1.8252 9.71628V4.002ZM11.2414 7.86753C11.3826 7.65526 11.3249 7.36878 11.1126 7.22764C10.9004 7.08651 10.6139 7.14417 10.4728 7.35643C9.94042 8.15705 9.03153 8.68309 7.99997 8.68309C6.96841 8.68309 6.05952 8.15705 5.52719 7.35643C5.38605 7.14417 5.09957 7.08651 4.88731 7.22764C4.67504 7.36878 4.61738 7.65526 4.75852 7.86753C5.45467 8.91452 6.64645 9.60617 7.99997 9.60617C9.35349 9.60617 10.5453 8.91452 11.2414 7.86753Z"
							fill="#1E80FF"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	let obj = {}; //存放数组
	let objKey = 0; //存放数组的对象的key
	const Num = 20;

	export default {
		data() {
			return {
				loading: true,
				list: [],
			};
		},
		methods: {
			intoarticle(ordernum) {
				this.$router.push({
					name: "article",
					params: {
						ordernum:ordernum
					},
				});
			},
			getinfo() {
				let that = this;
				this.loading = true;
				obj = {};
				objKey = 0;

				// let resultObj;
				const xhr = new XMLHttpRequest();
				xhr.open("GET", "http://39.108.194.218:3001/api/getlist");
				// xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
				xhr.send();
				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (xhr.status >= 200 && xhr.status < 300) {
							let resultObj = JSON.parse(xhr.response);
							//判断接收到的数据有多少   判断是否需要切割
							if (resultObj.length > Num) {
								for (let i = 0; i < Math.ceil(resultObj.length / Num); i++) {
									obj[i] = resultObj.slice(Num * i, Num * (i + 1));
								}
								that.list = obj[objKey];
								console.log(obj);
							} else {
								that.list = resultObj;
								that.loading = false;
							}
						}
					}
				};
			},
			// 锚回顶端
			backtotop() {
				scrollTo(0, 0);
			},
			// 
			showcover(index) {
				if (this.list[index].coverimg != '') {
					return true
				} else {
					return false
				}
			},
			scrollFn() {
				//获取窗口高度winHeight，滚动出去的长度st ， 文档的长度docHeight
				let winHeight =
					window.innerHeight ||
					document.documentElement.height ||
					document.body.clientHeight;
				let st =
					window.pageYOffset ||
					document.documentElement.scrollTop ||
					document.body.scrollTop;
				let docHeight =
					document.documentElement.scrollHeight || document.body.scrollHeight;

				if (objKey >= Object.keys(obj).length - 1) {
					this.loading = false;
					return;
				}

				if (winHeight + st >= docHeight) {
					console.log("触底了");
					objKey++;
					this.list = this.list.concat(obj[objKey]);
				}
			},
		},
		created() {
			this.getinfo();
		},
		mounted() {
			//监听滚动
			window.addEventListener("scroll", this.scrollFn);
		},
		beforeDestroy() {
			//移除监听
			window.removeEventListener("scroll", this.scrollFn);
		},
	};
</script>

<style scoped="scoped">
	element.style {
		border-bottom: 1px solid rgba(228, 230, 235, 0.5);
	}

	.sectopmenu {
		background-color: white;
		height: 45px;
		border: 1px solid #f1f1f1;
		font-size: 13px;
		color: #4a4a4a;
		display: flex;
		align-items: center;
	}

	.sectopmenuul {
		list-style: none;
		padding: 0;
		margin: 0;
		margin-left: 250px;


	}

	.sectopmenuul li {
		float: left;
		margin-left: 20px;

	}

	.sectopmenuul li:hover {
		color: #000FFF;
		cursor: pointer;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
	}

	li {
		list-style: none;
	}

	a {
		background-color: transparent;
		-webkit-text-decoration-skip: objects;
	}

	a,
	button,
	input {
		margin: initial;
	}

	a {
		text-decoration: none;
		cursor: pointer;
		color: #909090;
	}

	div {
		display: block;
	}

	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	main,
	menu,
	nav,
	section {
		display: block;
	}

	img {
		border-style: none;
	}

	#juejin {
		overflow-x: visible;
		overflow-x: initial;
	}

	.main-header-box {
		position: relative;
		height: 5rem;
	}

	.container {
		position: relative;
		margin: 0 auto;
		width: 100%;
		max-width: 960px;
	}

	.main-container>.view {
		margin-top: 0.8rem;
	}

	/*
.container .view.timeline-index-view {
  margin-top: 5.17rem;
}
.main-container.with-view-nav > .view {
  margin-top: 2.67rem;
}
 */
	.view-nav {
		position: fixed;
		top: 5rem;
		width: 100%;
		height: 3.833rem;
		z-index: 100;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
		transition: all 0.2s;
		transform: translateZ(0);
	}

	.view-nav,
	.view-nav:before {
		left: 0;
		background-color: #fff;
	}

	.view-nav:before {
		content: "";
		position: absolute;
		right: 0;
		bottom: 0;
		height: 200%;
		z-index: -1;
	}

	.nav-list {
		position: relative;
	}

	.view-nav .nav-list {
		max-width: 960px;
		height: 100%;
		margin: auto;
		display: flex;
		align-items: center;
		line-height: 1;
	}

	.nav-item {
		position: relative;
		cursor: pointer;
	}

	.view-nav .nav-list .nav-item {
		height: 100%;
		align-items: center;
		display: flex;
		flex-shrink: 0;
		font-size: 1.16rem;
		color: #71777c;
		padding: 0 1rem;
	}

	.view-nav .nav-list .nav-item:first-child {
		padding: 0 1rem 0 0;
	}

	.view-nav .nav-list .nav-item.active,
	.view-nav .nav-list .nav-item:hover {
		color: #007fff;
	}

	.list-header .nav-list .nav-item.active a,
	.list-header .nav-list .nav-item a:hover {
		color: #007fff;
	}

	.timeline-content {
		position: relative;
		margin-top: 0.33rem;
	}

	.timeline-container {
		margin-top: 0;
	}

	.timeline-entry-list {
		margin-right: 21.667rem;
		border-radius: 2px;
		width: 700px;
	}

	.aside {
		position: absolute;
		top: 0;
		right: 0;
	}

	.index-aside {
		width: 15rem;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 1;
	}

	.entry-list-container {
		background-color: #fff;
	}

	.list-header .list-nav,
	.list-header .nav-list {
		display: flex;
		justify-content: space-between;
	}

	.list-header {
		padding: 1.3rem 1rem;
		border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
	}

	.list-nav {
		justify-content: flex-start !important;
	}

	.list-header .nav-list {
		align-items: center;
		line-height: 1;
	}

	.list-header .left .nav-item {
		padding: 0 1.2rem;
		font-size: 1.16rem;
		border-right: 1px solid hsla(0, 0%, 59.2%, 0.2);
	}

	.list-nav .nav-list.left .nav-item {
		font-size: 1.17rem;
	}

	.list-header .nav-list .nav-item.active a,
	.list-header .nav-list .nav-item a:hover {
		color: #007fff;
	}

	.nav-item>a:before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	.dorp-down-area {
		position: relative;
		z-index: 9;
	}

	.container:after {
		display: table;
		content: "";
		clear: both;
	}

	.entry-list {
		width: 100%;
		position: relative;
	}

	.item {
		transition: all 0.3s ease-in;
	}

	.item:hover {
		background-color: #f8f8f8;
	}

	.entry {
		cursor: pointer;
		position: relative;
		padding: 12px 20px 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.meta-container,
	.meta-row {
		display: flex;
		align-items: center;
	}

	.meta-container {
		color: #86909c;
	}

	.meta-container .user-message {
		display: flex;
		align-items: center;
		margin-right: 8px;
		max-width: 162px;
		font-size: 13px;
		line-height: 22px;
		color: #4e5969;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		word-break: break-all;
	}

	.popover-box {
		display: inline;
	}

	.meta-container .date {
		position: relative;
		padding: 0 10px;
		line-height: 22px;
		font-size: 13px;
		flex-shrink: 0;
	}

	.meta-container .date:after,
	.meta-container .date:before {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: block;
		width: 1px;
		height: 14px;
		background: #e5e6eb;
		content: " ";
	}

	.meta-container .date:before {
		left: 0;
	}

	.meta-container .date:after {
		right: 0;
	}

	.tag_list,
	.tag_list .tag {
		display: flex;
		align-items: center;
	}

	.tag_list,
	.tag_list .tag {
		display: flex;
		align-items: center;
	}

	.tag_list .tag {
		position: relative;
		flex-shrink: 0;
		font-size: 13px;
		line-height: 22px;
		padding: 0 8px;
		color: #86909c;
	}

	.tag_list .tag:not(:last-child):after {
		position: absolute;
		right: -1px;
		display: block;
		content: " ";
		width: 2px;
		height: 2px;
		border-radius: 50%;
		background: #4e5969;
	}

	.tag_list .tag {
		position: relative;
		flex-shrink: 0;
		font-size: 13px;
		line-height: 22px;
		padding: 0 8px;
		color: #86909c;
	}

	.content-wrapper {
		display: flex;
		padding-bottom: 12px;
		border-bottom: 1px solid #e5e6eb;
		margin-top: 10px;
		width: 100%;
	}

	.content-wrapper .content-main {
		flex: 1 1 auto;
	}

	.title-row {
		display: flex;
		margin-bottom: 8px;
	}

	.title {
		font-weight: 700;
		font-size: 16px;
		line-height: 24px;
		color: #1d2129;
		width: 100%;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.abstract {
		margin-bottom: 10px;
	}

	.abstract a {
		color: #86909c;
		font-size: 13px;
		line-height: 22px;
		display: -webkit-box;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.action-list,
	.action-list>.item {
		display: flex;
		align-items: center;
	}

	.action-list>.item {
		position: relative;
		margin-right: 20px;
		font-size: 13px;
		line-height: 20px;
		color: #4e5969;
		flex-shrink: 0;
	}

	.action-list>.item i {
		display: block;
		width: 16px;
		height: 16px;
		background-size: 100%;
	}

	.action-list>.item.view i {
		background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/view.1eda8fa.png);
	}

	i+span {
		margin-left: 0.6rem;
	}

	.action-list>.item span {
		margin-left: 4px;
	}

	.action-list>.item.like i {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7VZNbtNQEP7GP7AkN8DcoJyA5gRNTwCR2kqsUm9YEKEaoZRl0hUSBLWcAHOCpjdIT1AfIewgTjzM+AccxwHXLRYS/STnvbyxZ743b34e8L+DcEMMhu+fERk7DLTAuAwRjjz3eVD1+xsROD75eARmr7AczDlsVyVhoCbeDt85mXHmqLtkbst0Ko9jk31aVU9tAgvYW7FxYNJ3D85eufuTOZtKYiZu3X4z/LBdRU9tAia4E0+YL7I1z+3OmPEpkWOrip7aBED0RAcb7K8KeBb/alD+LQIa+TI48kxfuAfTVSlVMlybgAafpN1RYgujopwIOzpGEhuogGuloTc8bd2j5TmS8/VfHu7t5uUaeCaRygORPaqi00JFJAVn2UuNa667xXfEeJZ+rePR+Kool7gIQg67+RpBJTvo5QMoZHPXxFLW8Tld2lhoUqMOfg/JlKjdT2Pnpwf0bDlx3worG1EnPlENF0m5OayO5+7NyjRLHXgMfCsNQhumrBviRfRAhnqyu0KAYXmpcX/BfKKekL+dvBIheOUddkuNK7QO6A43ycXDvolYr5OtGTnlD3VU41rVZLdfccvIipMYDdYINAHZZJyicgR+4wQ0hbVH6Px7RBeNE9BM0lGbVxorTRNImhcxf8mvNxcDafOywBM0TUCqqEa/I09QbF6NECDQdjKuN6hGCJSlX2MENqXfGgFKS6hlmA9wi7hvLJ/qWEy/DL96AfMlEXWkU/mD0XiCkjud7kRk56iOltwRYz3ShM7KXlhpx4PheBR3qxzS6zbSi0YtyOZe9919D38ioNC2vIDl6NyQC2bWtzWVomvf93gWwg7KXH+HfwY/AGsn+Lf3Dim6AAAAAElFTkSuQmCC);
	}

	.action-list>.item span {
		margin-left: 4px;
	}

	.action-list>.item.comment i {
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB7VZNbtpQEJ55BlR15RvUOUHTG5ATJD1BQ9NU6gq8JKiKoyrJ0u2qUmkFOUGaE5TegJwg7gnqLRh7MvMwwiDbYHCUDZ9kHph5M9+bN38AO+zwzEAoiEv3xz4v/KAFiK/0S6J/qPCBoui+Y38cFlC3HgHH7Zk1FTXZUIt/mivEPVY6GFFw4difPNiWwNW3X+dLhj1iA3JqProXq7EQ8TVoz4A1147OWfPkAjYhcO1+twirt7FSEexPiG4+26cDyMEXt1s3AI7Z+LsZ4TEFB1newBzjf2B6Gi8kaqwyvEpHFgmVtjmxcTgm401R44I2G0M2KjpEV5W9KbG0koC+8znrt47d8GFDCAk+gJCQwNyvwqS1LLNwBbHbHuQ7G99bJ4rXgY4LRPGqz4T2koda8EAERl2zIrory7hArlBnDmdSDSbHyf8WrwDVNHKV0YOyQdGNXhAPMwlgnHKjaHQPJUNBOEjamL9fhI7SMt0/Q3uu08wjoJGWLk+FZQKefLyEwIKSETcxwTCbANFfWQLAIygZCFifrjkEQq73WgixCaUziHWi+p1JIC65Hj/mpdt1oCQkq2u7+f4uk4BAGo8minguFQy2hFRXvlonqTuXgK5aRLqHc/m8vXK7LdgCE6hYskolTGtqqWnYsU+dmITJrnCvv/7sOXKSDVCBiScrJgeVBHInIokDuYqEsB5KQqgMl7uk1A4DwrpCkFLLExL0x1HAWfXCr2H4X2TOWh+wEAGB7pBQcRITzgwymvmxEilcVtp+cX1cfs20Drv2VKyDSVUPI4Ij3lRPEfFJclzXEvIQlXhioZ4QYaNjn/Q3IrAMiQmDA0wB+QGEflr/ENK6xXOXFS8QRQdFx/YdnhyP1D0hcwr1KvEAAAAASUVORK5CYII=);
	}

	.action-list>.item span {
		margin-left: 4px;
	}

	.lazy {
		position: relative;
		-o-object-fit: cover;
		object-fit: cover;
	}

	.thumb {
		flex: 0 0 auto;
		width: 120px;
		height: 80px;
		margin-left: 24px;
		background-color: #fff;
		border-radius: 2px;
	}

	.lazy:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: inherit;
		border-radius: inherit;
	}

	.lazy:not(.immediate):before {
		transition: opacity 0.2s;
	}

	.sidebar-block {
		background-color: #fff;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
		border-radius: 2px;
		margin-bottom: 1.3rem;
		font-size: 1.16rem;
		line-height: 1.29;
		color: #333;
	}

	.sidebar-block.banner-block {
		overflow: hidden;
	}

	.banner {
		position: relative;
		font-size: 0;
		cursor: pointer;
	}

	.sidebar-block.banner-block .banner {
		height: 200px;
	}

	.banner .ctrl-box .close-btn {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		font-size: 1rem;
		color: #909090;
		opacity: 0.5;
		display: none;
	}

	.banner .ctrl-box .label {
		position: absolute;
		right: 10px;
		bottom: 10px;
		line-height: 36px;
		height: 36px;
		font-size: 20px;
		z-index: 1;
		transform: scale(0.5);
		-webkit-transform: scale(0.5);
		transform-origin: right bottom;
		-webkit-transform-origin: right bottom;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.2);
		border: 1px solid #fff;
		border-radius: 6px;
		padding-left: 15px;
		padding-right: 15px;
		font-weight: 300;
	}

	.banner .ctrl-box .label span {
		vertical-align: top;
	}

	.banner .ctrl-box .label .inco {
		display: none;
	}

	.sidebar-block.banner-block {
		overflow: hidden;
	}

	.sidebar-block.banner-block .banner {
		height: 200px;
	}

	.sidebar-block {
		position: relative;
		margin-bottom: 1.5rem;
		border-radius: 2px;
	}

	.sidebar-block:not(.pure) {
		background-color: #fff;
	}

	.app-link {
		display: flex;
		align-items: center;
		padding: 1rem;
	}

	.qr-img {
		margin-right: 16px;
		width: 4.167rem;
		height: 4.167rem;
	}

	.headline {
		font-weight: 500;
		font-size: 14px;
		line-height: 22px;
		color: #1d2129;
	}

	.desc {
		margin-top: 0.5rem;
		font-size: 12px;
		line-height: 20px;
		color: #86909c;
	}

	.sidebar-block:after {
		display: table;
		content: "";
		clear: both;
	}

	.alert-list {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 2rem;
		right: 2rem;
		z-index: 1000;
	}

	.alert-list {
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 2rem;
		right: 2rem;
		z-index: 1000;
	}

	.suspension-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
		position: fixed;
		right: 2rem;
		bottom: 2rem;
		z-index: 1000;
	}

	.suspension-panel .btn {
		margin: 1rem 0 0;
		padding: 0;
		width: 3.33rem;
		height: 3.33rem;
		line-height: 1;
		color: #909090;
		background-color: #fff;
		border: 1px solid #f1f1f1;
		border-radius: 50%;
		box-shadow: 0 2px 8px rgb(50 50 50 / 4%);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.suspension-panel .to-top-btn {
		font-size: 1.6rem;
	}

	svg {
		width: 16;
		height: 16;
		fill: none;
	}

	svg:not(:root) {
		overflow: hidden;
	}

	.suspension-panel .meiqia-btn {
		font-size: 1.3rem;
		color: #007fff;
	}

	.loading {
		display: flex;
		align-items: center;
		padding-bottom: 20px;
		padding-top: 20px;
		justify-content: center;
	}

	.loading .iconfont {
		margin-right: 10px;
		animation: loading 1s linear infinite;
	}

	@keyframesloading {
		from {
			transform: rotate(0);
		}

		to {
			transform: rotate(360deg);
		}
	}
</style>
