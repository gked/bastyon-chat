<template>
	<div id="chatInput" class="noswipepnt">
		<div class="work" v-if="ready">
			<embeddedMessage
				v-if="isShareMessagePresent"
				@embedded-cancel="cancelShare"
				:messageTittle="embeddedShareMessageTitle"
				:messageText="embeddedShareMessageText"
			/>
			<div class="inputWrapper" :class="{ donate }" v-if="chat">
				<div class="tipusers" v-if="tipusers.length">
					<div
						@click="insertuser(user)"
						class="previewWrapperExt"
						:class="{ selected: tipuserindex == i }"
						:key="user.id"
						v-for="(user, i) in tipusers"
					>
						<preview :contact="user" mode="" />
					</div>
				</div>

				<div class="center" :class="{ embedded: hasEmbedded }">
					<record-progress
						v-if="voiceEnable && (isRecording || record)"
						:recordTime="recordTime"
						:isRecording="isRecording"
						:rmsData="recordRmsData"
						:opacity="cancelOpacity"
						@onClear="clear"
					/>
					<InputField
						v-else
						:sending="isSending"
						ref="newinput"
						:can-send="isShareMessagePresent"
						@chatMessage="sendinput"
						@emptyInput="emitInputData"
						@FilledInput="HideUploadPic"
						@base64="pasteImage"
						@focused="focused"
						@tipsearchrequest="tipBySearch"
						@browsetip="browsetip"
						@selectcurrenttip="selectcurrenttip"
						@donateaction="sendtransactionWrapper"
						:donate="donate"
						:storagekey="'chatinput' + chat.roomId"
						:tipusers="tipusers"
						:me="me"
					/>
					<div
						class="left"
						:class="{ extended: voiceEnable }"
						v-if="!streamMode && upload && chat && !hasEmbedded"
					>
						<div
							v-if="!isRecording && !record"
							class="iconbutton"
							@click="showinputmenu"
						>
							<i class="icon fas fa-plus"></i>
						</div>

						<template v-if="voiceEnable">
							<div v-show="isRecording || !record" class="iconbutton">
								<recordVoice
									@onRecordingStart="initRecording"
									@onRecordingStop="stopRecording"
									:prepareRecording="prepareRecording ? true : false"
									:isRecording="isRecording"
									:disabled="microphoneDisabled"
									@onClear="clear"
									@canceling="setOpacity"
								/>
							</div>
						</template>

						<div
							v-if="!isRecording && record"
							class="iconbutton"
							@click="
								(e) => {
									sendVoiceMessage();
								}
							"
						>
							<div>
								<i class="icon fas fa-paper-plane"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="bottom" v-if="donate">
					<div class="count">
						<i class="icon donate">Donate</i>
						<span class="sum">{{ donate.value }} PKOIN</span>
					</div>
					<i class="icon remove fa fa-times" @click="removetransaction"></i>
				</div>
			</div>
		</div>
		<div class="notready" v-else>
			<linepreloader />
		</div>
	</div>
</template>

<script src="./index.js"></script>
<style scoped lang="sass" src="./index.sass"></style>

<!-- THEMES BEGIN -->
<!-- THEMES END -->
