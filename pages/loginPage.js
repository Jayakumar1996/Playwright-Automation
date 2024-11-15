// pages/loginPage.js
import BasePage from './basePage';
import { baseUrl } from '../config';
import fs from 'fs';
import {
	loginPageLogo,
	usernameField,
	passwordField,
	loginButton
} from '../pageobjects/loginPage';

// Read test data from JSON file
const testData = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

class LoginPage extends BasePage {
	constructor(page) {
		super(page);
	}

	async openApp() {
		await this.open(baseUrl);
		await this.waitForPageLoad();
	}

	async isLogoVisible() {
		await this.isElementVisible(loginPageLogo, testData.notVisibleText);
	}

	async isUsernameFieldVisible() {
		await this.isElementVisible(usernameField, testData.notVisibleText);
	}

	async isPasswordFieldVisible() {
		await this.isElementVisible(passwordField, testData.notVisibleText);
	}

	async isLoginButtonEnabled() {
		await this.isElementEnabled(loginButton, testData.notEnabledText);
	}

	async loginAsStandardUser() {
		await this.waitAndFill(usernameField, testData.username);
		await this.waitAndFill(passwordField, testData.password);
		await this.waitAndClick(loginButton);
	}
}

export default LoginPage;
