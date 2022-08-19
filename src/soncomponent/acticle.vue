<template>
	<div class="main">

		<div id="content">

			<div class="articleicon">
				<ul>
					<li><i class="el-icon-thumb"></i></li>
					<li><i class="el-icon-s-comment"></i></li>
					<li><i class="el-icon-star-on"></i></li>
					<li><i class="el-icon-share"></i></li>
					<li><i class="el-icon-warning"></i></li>
					<li><i class="el-icon-s-operation"></i></li>
					
				</ul>
			</div>

			<div class="markdown-body">

				<div class="articletitle">{{articlecon.articletitle}}</div>
				<div class="conarthorbox">
					<img :src="articlecon.authorimg" />
					<div>
						<div>
							{{articlecon.nickname}}
						</div>
						<div class="conarticlefont">
							<span>
								{{cyear}}年{{cmonth}}月{{cday}}日&nbsp;{{chour}}:{{cmin}}
							</span>
							<span>·&nbsp;阅读&nbsp;{{articlecon.readnum}}</span>
						</div>
					</div>
					<button class="conarthorbtn">+&nbsp;关注</button>
				</div>





				<div class="condiv">
					<h2 data-id="heading-0" id='pa0' class="mululist">前言</h2>
					<p>今天给大家安利一波我在做前端开发<code>（crtl+c/v）</code>中的一些提升幸福度 <code>js</code>
						使用小技巧，它可以帮助你书写干净和优雅的<code>JavaScript</code>代码。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-1 " id='pa1' class="mululist">类型转换</h3>
					<pre><code class="hljs language-javascript copyable" lang="javascript"><span class="hljs-comment">// 字符转数字</span>
	<span class="hljs-string">'32'</span> * <span class="hljs-number">1</span>       <span class="hljs-comment">// 32</span>
	<span class="hljs-literal">null</span> * <span class="hljs-number">1</span>       <span class="hljs-comment">// 0</span>
	<span class="hljs-literal">undefined</span> * <span class="hljs-number">1</span>  <span class="hljs-comment">// NaN</span>
	
	<span class="hljs-comment">// 转字符串</span>
	<span class="hljs-string">''</span> + <span class="hljs-number">32</span>        <span class="hljs-comment">// '32'</span>
	<span class="hljs-string">''</span> + <span class="hljs-literal">undefined</span> <span class="hljs-comment">// 'undifined'</span>
	<span class="hljs-string">''</span> + <span class="hljs-literal">null</span>      <span class="hljs-comment">// 'null'</span>
	
	<span class="hljs-comment">// 时间戳</span>
	+<span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>()    <span class="hljs-comment">// 1656041075862</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用 <code>js</code> 运算符中的隐式转换，在做运算的时候会根据运算符的不同对数据做不同的转换。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-2" id='pa2' class="mululist">多值分配</h3>
					<pre><code class="hljs language-ini copyable" lang="ini">const <span class="hljs-section">[a, b, c]</span> = <span class="hljs-section">[1, 'hi', true]</span>  // <span class="hljs-attr">a</span> = <span class="hljs-number">1</span> , b = <span class="hljs-string">'hi'</span> , c = <span class="hljs-literal">true</span>
	
	const <span class="hljs-section">[x, ...y]</span> = <span class="hljs-section">[1, 2, 3]</span><span class="hljs-comment">;       // x = 1 , y = [2, 3]</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用数组的解构赋值（对象解构也可以）。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-3" id='pa3' class="mululist">取整</h3>
					<pre><code class="hljs language-arduino copyable" lang="arduino">  <span class="hljs-number">5.8</span> | <span class="hljs-number">0</span>    <span class="hljs-comment">// 5</span>
	<span class="hljs-number">-5.8</span> | <span class="hljs-number">0</span>    <span class="hljs-comment">// -5</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用计算机中二进制按位或进行计算（注意，如果<code>n</code>为正，则<code>n | 0</code>
						是向下舍入，如果<code>n</code>为负数，则是向上舍入）,<code>~~</code>(双非按位取反运算) 也可以达到类似效果。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-4" id='pa4' class="mululist">奇偶数</h3>
					<pre><code class="hljs language-arduino copyable" lang="arduino"><span class="hljs-type">const</span> num = <span class="hljs-number">13</span>;
	
	<span class="hljs-keyword">if</span> (num &amp; <span class="hljs-number">1</span>) console.<span class="hljs-built_in">log</span>(<span class="hljs-string">"odd"</span>);
	<span class="hljs-keyword">else</span> console.<span class="hljs-built_in">log</span>(<span class="hljs-string">"even"</span>);        <span class="hljs-comment">// odd</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用计算机中二进制按位与运算，通过 <code>&amp; 1</code> ，可以得出
						<code>奇数（十进制）</code>位与<code>1</code>的结果是<code>1</code>，<code>偶数（十进制）</code>位与<code>1</code>的结果是<code>0</code>。
					</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-5" id='pa5' class="mululist">&amp;&amp; 和 ||</h3>
					<pre><code class="hljs language-ini copyable" lang="ini">const <span class="hljs-attr">a</span> = <span class="hljs-literal">true</span> &amp;&amp; <span class="hljs-number">4</span> &amp;&amp; <span class="hljs-string">"a"</span><span class="hljs-comment">;      // a</span>
	
	const <span class="hljs-attr">b</span> = <span class="hljs-literal">true</span> &amp;&amp; <span class="hljs-number">0</span> &amp;&amp; <span class="hljs-string">"b"</span><span class="hljs-comment">;      // 0</span>
	
	const <span class="hljs-attr">c</span> = <span class="hljs-number">1</span> || <span class="hljs-number">2</span><span class="hljs-comment">;                // 1</span>
	
	const <span class="hljs-attr">d</span> = <span class="hljs-string">"d"</span> || <span class="hljs-string">"hi"</span><span class="hljs-comment">;           // 'd'</span>
	
	const <span class="hljs-attr">e</span> = <span class="hljs-string">""</span> || <span class="hljs-string">"hi"</span><span class="hljs-comment">;            // 'hi'</span>
	
	// 常用于回调函数调用
	cb &amp;&amp; cb()                       // cb 存在执行 cb 方法
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>： 利用逻辑运算符的特性，可以实现降低代码的</p>
					<p><strong>&amp;&amp;</strong> ：从左往右依次判断，当当前值为 <strong>true</strong> 则继续，为 <strong>false</strong>
						则返回此值。</p>
					<p><strong>||</strong> ：从左往右依次判断，当当前值为 <strong>false</strong> 则继续，为 <strong>true</strong> 则返回此值。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-6" id='pa6' class="mululist">?? 运算符</h3>
					<pre><code class="hljs language-javascript copyable" lang="javascript"><span class="hljs-number">0</span> ?? <span class="hljs-number">2</span>           <span class="hljs-comment">// 0</span>
	<span class="hljs-number">1</span> ?? <span class="hljs-number">2</span>           <span class="hljs-comment">// 1</span>
	<span class="hljs-literal">false</span> ?? <span class="hljs-number">2</span>       <span class="hljs-comment">// false</span>
	<span class="hljs-literal">null</span> ?? <span class="hljs-number">2</span>        <span class="hljs-comment">// 2</span>
	<span class="hljs-literal">undefined</span> ?? <span class="hljs-number">2</span>   <span class="hljs-comment">// 2 </span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：某些情况可以用 <code>??</code> 来替代 <code>||</code>，因为 <code>??</code>
						判断运算符左侧的值为<code>null</code> 或 <code>undefined</code>时，才返回右侧的值，可以处理 <code>0</code> ，
						<code>false</code> 的情况。
					</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-7" id='pa7' class="mululist">UniqueID 生成器</h3>
					<pre><code class="hljs language-scss copyable" lang="scss">Math<span class="hljs-selector-class">.random</span>()<span class="hljs-selector-class">.toString</span>(<span class="hljs-number">36</span>)<span class="hljs-selector-class">.slice</span>(<span class="hljs-number">8</span>)
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用<code>toSring</code>函数将随机数转换为一个<code>36进制</code>字符串，在通过<code>slice</code>函数截取小数点以后的字符。
					</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-8" id='pa8' class="mululist">uuid 生成器</h3>
					<pre><code class="hljs language-ini copyable" lang="ini">const <span class="hljs-attr">uuid</span> = crypto.randomUUID()<span class="hljs-comment">;  // '460e025e-cf90-47c0-a2a3-f920755d63c5'</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用 <a
							href="https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FWeb_Crypto_API"
							target="_blank" rel="nofollow noopener noreferrer"
							title="https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"
							ref="nofollow noopener noreferrer">Web Crypto</a> 提供的加密接口，可以很方便的使用其 <code>api</code> 生成
						<code>uuid</code>。
					</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-9" id='pa9' class="mululist">数组过滤 <code>False</code> 类型值</h3>
					<pre><code class="hljs language-javascript copyable" lang="javascript"><span class="hljs-keyword">const</span> arr = [<span class="hljs-literal">false</span>, <span class="hljs-literal">null</span>, <span class="hljs-number">0</span>, <span class="hljs-string">""</span>, <span class="hljs-literal">undefined</span>, <span class="hljs-title class_">NaN</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
	<span class="hljs-keyword">const</span> nArr = arr.<span class="hljs-title function_">filter</span>(<span class="hljs-title class_">Boolean</span>)  <span class="hljs-comment">// [1,2,3]</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用 <code>Boolean</code> 函数对数组中的元素进行转换后过滤。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-10" id='pa10' class="mululist">数组去重</h3>
					<pre><code class="hljs language-javascript copyable" lang="javascript"><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>,<span class="hljs-number">3</span>,<span class="hljs-number">2</span>,<span class="hljs-number">1</span>]
	<span class="hljs-keyword">const</span> uArr= [...<span class="hljs-keyword">new</span> <span class="hljs-title class_">Set</span>(arr)]    <span class="hljs-comment">// [1,2,3]</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用 <code>ES6</code> 中 <code>Set</code> 数据解构不重复的特性。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-11" id='pa11' class="mululist">数组乱序</h3>
					<pre><code class="hljs language-ini copyable" lang="ini">const <span class="hljs-attr">arr</span> = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]<span class="hljs-comment">;</span>
	arr.sort(() =&gt; Math.random() - 0.5)   // <span class="hljs-section">[5, 4, 3, 2, 6, 8, 1, 7]</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用数组自带的 <code>sort</code> 函数通过随机数的比较来打乱（会改变原始数组）。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-12" id='pa12' class="mululist">数组求和</h3>
					<pre><code class="hljs language-javascript copyable" lang="javascript"><span class="hljs-keyword">const</span> arr = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]
	<span class="hljs-keyword">const</span> sum = arr.<span class="hljs-title function_">reduce</span>(<span class="hljs-function">(<span class="hljs-params">x, y</span>) =&gt;</span> x + y)  <span class="hljs-comment">// 6</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用 <code>reduce</code> 函数收敛的特性，传入一个累加函数，数组中的每个值（从左到右）开始缩减，最终计算为一个值。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-13" id='pa13' class="mululist">数组交集</h3>
					<pre><code class="hljs language-ini copyable" lang="ini">const <span class="hljs-attr">arr1</span> = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>]<span class="hljs-comment">;</span>
	const <span class="hljs-attr">arr2</span> = [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]<span class="hljs-comment">;</span>
	
	arr1.filter(<span class="hljs-attr">v</span> =&gt; arr2.includes(v))<span class="hljs-comment">;   // [2, 3, 4]</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用数组 <code>filter</code> 和 <code>includes</code> 函数过滤过存在于另一个数组中的元素，求交集。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-14" id='pa4' class="mululist">数组并集</h3>
					<pre><code class="hljs language-ini copyable" lang="ini">const <span class="hljs-attr">arr1</span> = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]<span class="hljs-comment">;</span>
	const <span class="hljs-attr">arr2</span> = [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]<span class="hljs-comment">;</span>
	
	arr1.concat(arr2.filter(<span class="hljs-attr">v</span> =&gt; !arr1.includes(v)))<span class="hljs-comment">;  // [1, 2, 3, 4]</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：利用数组 <code>concat</code> 和 <code>includes</code> 函数拼接另一个数组中不存在的元素，求并集。</p>
				</div>
				<div class="condiv">
					<h3 data-id="heading-15" id='pa15' class="mululist">数组差集</h3>
					<pre><code class="hljs language-ini copyable" lang="ini">const <span class="hljs-attr">arr1</span> = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>]
	const <span class="hljs-attr">arr2</span> = [<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>]<span class="hljs-comment">;</span>
	
	arr1.filter(<span class="hljs-attr">v</span> =&gt; !arr2.includes(v))<span class="hljs-comment">;   // [1, 4]</span>
	<span class="copy-code-btn">复制代码</span></code></pre>
					<p><code>tips</code>：<code>arr1</code> 利用 <code>filter</code> 函数过滤出不存在于 <code>arr2</code> 中的元素，得到差集。
					</p>
				</div>

			</div>




			<div class="commentpart">
				<h2>评论</h2>
			</div>

		</div>
		<div class="rightbox">

			<div class="authorbox">
				<div style="display: flex; border-bottom: 1px solid #e1e1e1;padding-bottom: 15px;">
					<img :src="articlecon.authorimg" />
					<div style="line-height: 30px;margin-left: 20px;">{{articlecon.nickname}}</div>
				</div>
				<div style="padding-top:10px;font-size:14px;display: flex;align-items: center;">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" class="zan"
						data-v-71f2d09e="" data-v-25b8648c="">
						<g fill="none" fill-rule="evenodd" transform="translate(0 .57)" data-v-71f2d09e=""
							data-v-25b8648c="">
							<ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57" data-v-71f2d09e=""
								data-v-25b8648c=""></ellipse>
							<path fill="#7BB9FF"
								d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"
								data-v-71f2d09e="" data-v-25b8648c=""></path>
						</g>
					</svg>
					<div style="margin-left: 10px;">获得点赞 21</div>
				</div>
				<div style="padding-top:10px;font-size: 14px; display: flex;align-items: center;">
					<svg width="25" height="25" viewBox="0 0 25 25" class="icon stat-view-icon" data-v-71f2d09e=""
						data-v-25b8648c="">
						<g fill="none" fill-rule="evenodd" data-v-71f2d09e="" data-v-25b8648c="">
							<circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF" data-v-71f2d09e="" data-v-25b8648c="">
							</circle>
							<path fill="#7BB9FF"
								d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"
								data-v-71f2d09e="" data-v-25b8648c=""></path>
						</g>
					</svg>
					<div style="margin-left: 10px;">文章被阅读 2,479</div>
				</div>

			</div>
			<div class="nextauthorbox">
				<img src="http://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/home.59780ae.png">
				<div>下载稀土掘金app</div>
			</div>
			<div class="thirdimg">

				<img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/default.640d9a7.png" alt=""
					class="adimg">

			</div>
			<div class="muluparent">

				<div id="mulu">

					<i>目录</i>
					<div> <a href="#pa0" class="mu" style="color:blue"></a> </div>
					<div> <a href="#pa1" class="mu"></a> </div>
					<div> <a href="#pa2" class="mu"></a> </div>
					<div> <a href="#pa3" class="mu"></a> </div>
					<div> <a href="#pa4" class="mu"></a> </div>
					<div> <a href="#pa5" class="mu"></a> </div>
					<div><a href="#pa6" class="mu"></a> </div>
					<div> <a href="#pa7" class="mu"></a> </div>
					<div> <a href="#pa8" class="mu"></a> </div>
					<div> <a href="#pa9" class="mu"></a> </div>
					<div> <a href="#pa10" class="mu"></a> </div>
					<div><a href="#pa11" class="mu"></a> </div>
					<div> <a href="#pa12" class="mu"></a> </div>
					<div> <a href="#pa13" class="mu"></a> </div>
					<div> <a href="#pa14" class="mu"></a> </div>
					<div> <a href="#pa15" class="mu"></a> </div>

				</div>

			</div>

		</div>

	</div>
</template>

<script>
	export default {
		props: ['ordernum'],
		data() {
			return {
				a: [],
				b: [],
				muluparent: '',
				mulu: '',
				articlecon: [],
				cyear: '',
				cmonth: '',
				cday: '',
				chour: '',
				cmin: '',
				csec: '',
				windowwidth:''
			}
		},
		mounted() {
			var articleicon=document.getElementsByClassName("articleicon")[0]
			window.onresize=function(){
				this.windowwidth=document.body.clientWidth;
				if(this.windowwidth<1300){
					articleicon.style.display='none'
				}else{
					articleicon.style.display='block'
				}
			}
			this.muluparent = document.getElementsByClassName("muluparent")[0]
			this.a = document.getElementsByClassName("mululist");
			this.b = document.getElementsByClassName("mu");
			this.mulu = document.getElementById("mulu");
			window.onscroll = this.fix;
			for (let i = 0; i < this.b.length; i++) {
				this.b[i].innerText = this.a[i].innerText;
			}

			this.getinfo()
		},
		beforeUpdate() {
			scrollTo(0, 0);
		},
		methods: {




			getinfo() {
				var that = this;
				const xhr = new XMLHttpRequest();
				xhr.open("GET", "http://39.108.194.218:3001/api/getdetail?ordernum=" + this.ordernum);
				// xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
				xhr.send();
				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (xhr.status >= 200 && xhr.status < 300) {
							that.articlecon = JSON.parse(xhr.response)[0];
							var totime = new Date(that.articlecon.creattime * 1000)
							that.cyear = totime.getFullYear()
							that.cmonth = totime.getMonth() + 1 < 10 ? '0' + (totime.getMonth() + 1) : (totime
								.getMonth() + 1);
							that.cday = totime.getDate()
							that.chour = totime.getHours() < 10 ? "0" + totime.getHours() : totime.getHours()
							that.cmin = totime.getMinutes() < 10 ? "0" + totime.getMinutes() : totime.getMinutes()
						}
					}
				}
			},



			fix() {
				var muluparenttop = this.muluparent.getBoundingClientRect().top;
				var condiv = document.getElementsByClassName("condiv")
				if (muluparenttop <= 0) {
					this.mulu.style.position = "fixed";
					this.mulu.style.top = 20 + "px";
				} else {
					this.mulu.style.position = "relative";
					this.mulu.style.top = 0 + "px";
				}

				for (let i = 0; i < this.b.length; i++) {

					if (condiv[i].getBoundingClientRect().top <= 50) {

						for (let j = 0; j < this.b.length; j++) {
							this.b[j].style.color = 'black'
						}

						this.b[i].style.color = 'blue'
						if (condiv[i].getBoundingClientRect().bottom < 0) {
							this.b[i].style.color = 'black'
						}
					}

				}
			}
		},
	}
</script>

<style scoped="scoped">
	body {
		background-color: #f2f3f5;
	}

	.main {
		display: flex;
		padding: 10px;
		margin: auto;
		width: 1100px;
	}

	.markdown-body {
		background-color: white;
		padding: 30px;
		border-radius: 5px;
	}

	#content {
		margin: 10px;
		width: 750px;
	}

	.articleicon {
		position: fixed;
		top: 120px;
		left: 110px;

	}
.articleicon li{
	height: 50px;
	width: 50px;
	border-radius: 100%;
	background-color: white;
	margin-top: 20px;
	text-align: center;
	line-height: 56px;
}
	.articleicon ul{
		padding: 0;
		margin: 0;
		list-style: none;
		color: #757575;
	}
.articleicon i{
	font-size: 25px;
}
	.articletitle {
		font-size: 33px;
		font-weight: bold;
		padding: 0 0 20px 0;
	}

	.conarthorbox {
		height: 50px;

		display: flex;
		align-items: center;
	}

	.conarthorbox img {
		width: 50px;
		height: 50px;
		border-radius: 100%;
		margin-right: 10px;
	}

	.conarticlefont {
		color: #959595;
		font-size: 14px;
	}

	.conarthorbtn {
		width: 68px;
		height: 31px;
		background-color: #f3f9ff;
		border-radius: 6px;
		border: 1px solid #00aaff;
		color: #00aaff;
		margin-left: 350px;
	}

	.commentpart {
		margin-top: 20px;
		height: 500px;
		background-color: white;
		border-radius: 5px;
		padding: 25px;
	}

	.rightbox {
		margin: 10px;
	}

	.mu {
		text-decoration: none;
		color: black;
	}

	.adimg {
		width: 280px;
		padding: 0;
		margin: 0;
	}

	.authorbox {
		background-color: #fff;
		border-radius: 5px;
		padding: 15px;
	}

	.authorbox img {
		width: 50px;
		height: 50px;
		border-radius: 100%;
	}

	.nextauthorbox {
		margin-top: 20px;
		background-color: #fff;
		border-radius: 5px;
		padding: 15px;
		display: flex;
	}

	.nextauthorbox div {
		padding-left: 10px;
		line-height: 60px;
		color: #8d8d8d;
	}

	.nextauthorbox img {
		width: 60px;
	}

	.thirdimg {
		margin-top: 20px;
		border-radius: 5px;
	}

	.thirdimg img {
		margin-top: 20px;
		border-radius: 5px;
	}

	#mulu {
		background-color: #fff;
		width: 260px;
		padding: 10px;
		border-radius: 5px;
	}


	.muluparent {
		margin-top: 20px;
	}

	#mulu div {
		padding: 8px;
		font-size: 14px;
	}

	.markdown-body {
		word-break: break-word;
		line-height: 1.75;
		font-weight: 400;
		font-size: 16px;
		overflow-x: hidden;
		color: #333
	}

	.markdown-body h1,
	.markdown-body h2,
	.markdown-body h3,
	.markdown-body h4,
	.markdown-body h5,
	.markdown-body h6 {
		line-height: 1.5;
		margin-top: 35px;
		margin-bottom: 10px;
		padding-bottom: 5px
	}

	.markdown-body h1 {
		font-size: 24px;
		margin-bottom: 5px
	}

	.markdown-body h2,
	.markdown-body h3,
	.markdown-body h4,
	.markdown-body h5,
	.markdown-body h6 {
		font-size: 20px
	}

	.markdown-body h2 {
		padding-bottom: 12px;
		border-bottom: 1px solid #ececec
	}

	.markdown-body h3 {
		font-size: 18px;
		padding-bottom: 0
	}

	.markdown-body h6 {
		margin-top: 5px
	}

	.markdown-body p {
		line-height: inherit;
		margin-top: 22px;
		margin-bottom: 22px
	}

	.markdown-body img {
		max-width: 100%
	}

	.markdown-body hr {
		border: none;
		border-top: 1px solid #ddd;
		margin-top: 32px;
		margin-bottom: 32px
	}

	.markdown-body code {
		word-break: break-word;
		border-radius: 2px;
		overflow-x: auto;
		background-color: #fff5f5;
		color: #ff502c;
		font-size: .87em;
		padding: .065em .4em
	}

	.markdown-body code,
	.markdown-body pre {
		font-family: Menlo, Monaco, Consolas, Courier New, monospace
	}

	.markdown-body pre {
		overflow: auto;
		position: relative;
		line-height: 1.75
	}

	.markdown-body pre>code {
		font-size: 12px;
		padding: 15px 12px;
		margin: 0;
		word-break: normal;
		display: block;
		overflow-x: auto;
		color: #333;
		background: #f8f8f8
	}

	.markdown-body a {
		text-decoration: none;
		color: #0269c8;
		border-bottom: 1px solid #d1e9ff
	}

	.markdown-body a:active,
	.markdown-body a:hover {
		color: #275b8c
	}

	.markdown-body table {
		display: inline-block !important;
		font-size: 12px;
		width: auto;
		max-width: 100%;
		overflow: auto;
		border: 1px solid #f6f6f6
	}

	.markdown-body thead {
		background: #f6f6f6;
		color: #000;
		text-align: left
	}

	.markdown-body tr:nth-child(2n) {
		background-color: #fcfcfc
	}

	.markdown-body td,
	.markdown-body th {
		padding: 12px 7px;
		line-height: 24px
	}

	.markdown-body td {
		min-width: 120px
	}

	.markdown-body blockquote {
		color: #666;
		padding: 1px 23px;
		margin: 22px 0;
		border-left: 4px solid #cbcbcb;
		background-color: #f8f8f8
	}

	.markdown-body blockquote:after {
		display: block;
		content: ""
	}

	.markdown-body blockquote>p {
		margin: 10px 0
	}

	.markdown-body ol,
	.markdown-body ul {
		padding-left: 28px
	}

	.markdown-body ol li,
	.markdown-body ul li {
		margin-bottom: 0;
		list-style: inherit
	}

	.markdown-body ol li .task-list-item,
	.markdown-body ul li .task-list-item {
		list-style: none
	}

	.markdown-body ol li .task-list-item ol,
	.markdown-body ol li .task-list-item ul,
	.markdown-body ul li .task-list-item ol,
	.markdown-body ul li .task-list-item ul {
		margin-top: 0
	}

	.markdown-body ol ol,
	.markdown-body ol ul,
	.markdown-body ul ol,
	.markdown-body ul ul {
		margin-top: 3px
	}

	.markdown-body ol li {
		padding-left: 6px
	}

	.markdown-body .contains-task-list {
		padding-left: 0
	}

	.markdown-body .task-list-item {
		list-style: none
	}

	@media (max-width:720px) {
		.markdown-body h1 {
			font-size: 24px
		}

		.markdown-body h2 {
			font-size: 20px
		}

		.markdown-body h3 {
			font-size: 18px
		}
	}
</style>
<style>
	.markdown-body pre,
	.markdown-body pre>code.hljs {
		color: #333;
		background: #f8f8f8
	}

	.hljs-comment,
	.hljs-quote {
		color: #998;
		font-style: italic
	}

	.hljs-keyword,
	.hljs-selector-tag,
	.hljs-subst {
		color: #333;
		font-weight: 700
	}

	.hljs-literal,
	.hljs-number,
	.hljs-tag .hljs-attr,
	.hljs-template-variable,
	.hljs-variable {
		color: teal
	}

	.hljs-doctag,
	.hljs-string {
		color: #d14
	}

	.hljs-section,
	.hljs-selector-id,
	.hljs-title {
		color: #900;
		font-weight: 700
	}

	.hljs-subst {
		font-weight: 400
	}

	.hljs-class .hljs-title,
	.hljs-type {
		color: #458;
		font-weight: 700
	}

	.hljs-attribute,
	.hljs-name,
	.hljs-tag {
		color: navy;
		font-weight: 400
	}

	.hljs-link,
	.hljs-regexp {
		color: #009926
	}

	.hljs-bullet,
	.hljs-symbol {
		color: #990073
	}

	.hljs-built_in,
	.hljs-builtin-name {
		color: #0086b3
	}

	.hljs-meta {
		color: #999;
		font-weight: 700
	}

	.hljs-deletion {
		background: #fdd
	}

	.hljs-addition {
		background: #dfd
	}

	.hljs-emphasis {
		font-style: italic
	}

	.hljs-strong {
		font-weight: 700
	}
</style>
