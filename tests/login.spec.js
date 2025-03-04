import { test, expect } from '@playwright/test';
import { obterCodigo2FA } from '../support/db';
import { LoginPage } from '../pages/LoginPage';
import { DashPage } from '../pages/DashPage';
import { cleanJobs, getJob } from '../support/redis';

test('não deve logar quando o código de autenticação for inválido', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const usuario = {
    cpf: "00000014141",
    senha: "147258"
  }
  await loginPage.acessaPagina()
  await loginPage.informaCpf(usuario.cpf);
  await loginPage.informaSenha(usuario.senha);
  await loginPage.informe2FA('123456');
  await expect(page.locator('span')).toContainText('Código inválido. Por favor, tente novamente.');
});
test('Deve acesar a conta do usuário', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashPage = new DashPage(page);

  const usuario = {
    cpf: "00000014141",
    senha: "147258"
  }
  await cleanJobs();

  await loginPage.acessaPagina()
  await loginPage.informaCpf(usuario.cpf);
  await loginPage.informaSenha(usuario.senha);

  await page.getByRole('heading', { name: 'Verificação em duas etapas' })
    .waitFor({ timeout: 3000 })

  //const code = await obterCodigo2FA(usuario.cpf);
  const codigo = await getJob();
  await loginPage.informe2FA(codigo);

  await page.locator('#account-balance').waitFor({ state: 'visible', timeout: 7000 });
  await expect(await dashPage.obterSaldo()).toContainText('R$ 5.000,00');
});