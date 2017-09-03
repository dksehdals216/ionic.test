import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LivePage } from '../live/live';
import { ListPage } from '../list/list';
import { SettingsPage } from '../settings/settings';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

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
}
