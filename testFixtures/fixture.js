// testFixtures/fixture.js
import { test as base } from '@playwright/test';
import LoginPage from '../pages/loginPage';

const test = base.extend({
	loginPage: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use(loginPage);
	}
});

export default test;
