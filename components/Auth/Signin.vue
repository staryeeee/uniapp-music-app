<template>
	<view class="signin-view">
		<u-popup :show="show" mode="center" @open="handleOpen" @close="handleClose">
			<view class="signin-form">
				<view class="form-head">
					<image class="img-logo" src="@/static/logo.png" mode="aspectFill"></image>
				</view>
				<view class="form-body">
					<u--input v-model="signinForm.phone" placeholder="请输入手机号" prefixIcon="account" prefixIconStyle="font-size: 22px;color: #909399"></u--input>
					<u--input v-model="signinForm.password" type="password" placeholder="请输入密码" prefixIcon="lock" prefixIconStyle="font-size: 22px;color: #909399"></u--input>
				</view>
				<view class="form-action">
					<u-button type="primary" text="登录" color="#cb3631" @click="handleSigninSubmit"></u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import uPopup from "@/uni_modules/uview-ui/components/u-popup/u-popup.vue"
	import {
		mapState,
		mapActions
	} from 'vuex'
	import {
		fetchLoginCellphone
	} from '@/api/music'
	
	export default {
		name: 'signin',
		props: {
			value: {
				type: Boolean,
				default: false
			}
		},
		components: {
			uPopup
		},
		data() {
			return {
				show: this.value,
				signinForm: {
					phone: '',
					password: ''
				}
			}
		},
		watch: {
			value(val) {
				this.show = val
			},
			show(val) {
				this.$emit('input', val)
			}
		},
		computed: {
			...mapState('auth', ['cookie', 'token', 'userInfo'])
		},
		methods: {
			...mapActions({
				setCookie: 'auth/setCookie',
				setToken: 'auth/setToken',
				setUserInfo: 'auth/setUserInfo'
			}),
			handleSigninSubmit() {
				fetchLoginCellphone(this.signinForm).then(res => {
					this.setCookie(res.cookie)
					this.setToken(res.token)
					this.setUserInfo(res.profile)
					this.show = false
				})
			},
			handleOpen() {
				this.$emit('open')
			},
			handleClose() {
				this.show = false
				this.$emit('close')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.signin-view {
		::v-deep .u-popup {
			.u-popup__content {
				padding: 100rpx 70rpx;
				background-color: #fff;
				border-radius: 10rpx;
				box-shadow: 0 5rpx 10rpx rgba(0, 0, 0, 0.2);
					
				.signin-form {
					
					.form-head {
						display: flex;
						justify-content: center;
							
						.img-logo {
							width: 120rpx;
							height: 120rpx;
						}
					}
					
					.form-body {
						margin-top: 60rpx;
						
						.u-input {
							border: 2rpx solid #dbdbdb;
							border-radius: 0;
							
							&:first-child {
								border-bottom: 0;
							}
						}
					}
					
					.form-action {
						margin-top: 80rpx;
					}
				}
			}
		}
	}
</style>