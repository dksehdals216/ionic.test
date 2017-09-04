import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LivePage } from '../live/live';
import { ListPage } from '../list/list';
import { SettingsPage } from '../settings/settings';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(private streamingMedia: StreamingMedia, public navCtrl: NavController) {

	}

	launchLivePage() {
		this.navCtrl.push(LivePage)
	}

	launchListPage() {
		this.navCtrl.push(ListPage)
	}

	launchSettingsPage() {
		this.navCtrl.push(SettingsPage)
	}

	startVideo() {
		let options: StreamingVideoOptions = {
			successCallback: () => { console.log()},
			errorCallback: () => { console.log()},
			orientation: 'portrait'
		}

		//link goes here
		this.streamingMedia.playVideo('http://www.sample-video.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options);

	}

	startAudio() {
		let options: StreamingAudioOptions = {
			successCallback: () => { console.log()},
			errorCallback: () => { console.log()},
			initFullscreen: false,
		}

		//audio goes here
		this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options);
	}

	stopAudio() {
		this.streamingMedia.stopAudio();
	}
}
