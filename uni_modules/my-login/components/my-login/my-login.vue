<template>
	<view class = "login-container">
		<!-- 图标 -->
		<uni-icons type = "contact-filled" size = "100" color = "#AFAFAF"></uni-icons>
		
		<!-- 登录按钮 -->
		<button type = "primary" class = "btn-login" 
				@click="getPhoneNumber()"> 一键登录 </button>
		
		<view class = "tips-text"> 请登录后进行使用！</view>
	</view>
</template>

<script>
	export default {
		methods: {
			// 用户按了允许授权按钮
			async getPhoneNumber(e) {
				console.log('获取手机号码Code：', e.detail)
				if (e.detail.code) {
					console.log(e.detail.code)
				} else {
					// 用户按了拒绝按钮
					wx.hideLoading()
					wx.showModal({
						title: '提示',
						content: '拒绝授权将无法注册登陆小程序！',
						showCancel: false,
						success: (res) => {
							if (res.confirm) {
								this.isShowPhone = true
							}
						}
					})
				}
			},
		}
	}
</script>


<style>
	.login-container {
		height: 750rpx;
		background-color: #f8f8f8;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
	
	
	.btn-login {
		width: 90%;
		border-radius:  25px;
		margin: 15px 0;
		background-color: #C00000;
	}
	
	.tips-text {
		font-size: 12px;
		color: gray;
	}
</style>
