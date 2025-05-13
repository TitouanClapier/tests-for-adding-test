import { test, expect } from '@playwright/test';

test('affiche la liste des utilisateurs', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('listitem')).toHaveCount(2);
  await expect(page.getByText('Alice')).toBeVisible();
  await expect(page.getByText('Bob')).toBeVisible();
});

test('ajoute un nouvel utilisateur', async ({ page }) => {
  await page.goto('/');

  await page.fill('input#name', 'Charlie');
  await page.getByRole('button', { name: 'Créer' }).click();

  await expect(page.getByText('Charlie')).toBeVisible();
});
