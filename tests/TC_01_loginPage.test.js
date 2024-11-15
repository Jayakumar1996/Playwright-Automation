import test from '../testFixtures/fixture';
import { expect } from '@playwright/test';
import fs from 'fs';

const testData = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

import {
	baseUrl,
	title
} from '../config';

test.describe.parallel('@smoke: Login as a standard user to verify the products page and logout from the application', () => {
	test('Login to App as a standard user', async ({ loginPage}) => {
		await test.step('Open the APP and check logo', async () => {
			await loginPage.openApp();
			await loginPage.isLogoVisible();
			expect(await loginPage.getTitle()).toBe(title);
			expect(await loginPage.getUrl()).toContain(baseUrl);
		});

		await test.step('Verify username and password fields are visible on login page', async () => {
			await loginPage.isUsernameFieldVisible();
			await loginPage.isPasswordFieldVisible();
		});

		await test.step('Verify Login button is enabled', async () => {
			await loginPage.isLoginButtonEnabled();
		});

		await test.step('Login as a Standard user', async () => {
			await loginPage.loginAsStandardUser();
		});
	});
});
