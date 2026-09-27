import { test, expect } from '@playwright/test';

test('abre a página inicial e carrega os contatos', async ({ page }) => {
  const contactsResponsePromise = page.waitForResponse(
    (response) =>
      response.url().includes('/contacts') &&
      response.request().method() === 'GET'
  );

  await page.goto('/');

  await expect(page.getByRole('img', { name: 'MyContacts' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Novo contato' })).toBeVisible();
  await expect(page.getByRole('status', { name: 'Carregando' })).toBeVisible();

  const contactsResponse = await contactsResponsePromise;
  expect(contactsResponse.ok()).toBe(true);

  await expect(page.getByRole('status', { name: 'Carregando' })).toBeHidden();
});
