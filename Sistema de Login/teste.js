const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

async function testeLogin() {
    // Cria instância do navegador Chrome
    let driver = await new Builder().forBrowser('chrome').build();
    
    try {
        console.log('Iniciando teste de login...\n');
        
        // Acessa a página HTML (ajuste o caminho conforme sua pasta)
        await driver.get('file:///' + __dirname + '/index.html');
        
        // Aguarda a página carregar
        await driver.sleep(1000);
        
        // ========== TESTE 1: Login com sucesso ==========
        console.log('TESTE 1: Login válido');
        
        // Preenche o campo usuário
        await driver.findElement(By.id('usuario')).sendKeys('admin');
        
        // Preenche o campo senha
        await driver.findElement(By.id('senha')).sendKeys('1234');
        
        // Clica no botão Entrar
        await driver.findElement(By.id('btnEntrar')).click();
        
        // Aguarda a mensagem aparecer
        await driver.sleep(500);
        
        // Captura a mensagem exibida
        let mensagem = await driver.findElement(By.id('mensagem')).getText();
        
        // Valida o resultado
        if (mensagem === 'Login realizado com sucesso!') {
            console.log('✓ PASSOU: ' + mensagem);
        } else {
            console.log('✗ FALHOU: Mensagem esperada não encontrada');
        }
        
        // Limpa os campos para próximo teste
        await driver.findElement(By.id('usuario')).clear();
        await driver.findElement(By.id('senha')).clear();
        await driver.sleep(500);
        
        // ========== TESTE 2: Login inválido ==========
        console.log('\nTESTE 2: Login inválido');
        
        await driver.findElement(By.id('usuario')).sendKeys('usuario_errado');
        await driver.findElement(By.id('senha')).sendKeys('senha_errada');
        await driver.findElement(By.id('btnEntrar')).click();
        
        await driver.sleep(500);
        mensagem = await driver.findElement(By.id('mensagem')).getText();
        
        if (mensagem === 'Usuário ou senha inválidos!') {
            console.log('✓ PASSOU: ' + mensagem);
        } else {
            console.log('✗ FALHOU: Mensagem esperada não encontrada');
        }
        
        // Limpa os campos
        await driver.findElement(By.id('usuario')).clear();
        await driver.findElement(By.id('senha')).clear();
        await driver.sleep(500);
        
        // ========== TESTE 3: Campos vazios ==========
        console.log('\nTESTE 3: Campos vazios');
        
        await driver.findElement(By.id('btnEntrar')).click();
        
        await driver.sleep(500);
        mensagem = await driver.findElement(By.id('mensagem')).getText();
        
        if (mensagem === 'Preencha todos os campos!') {
            console.log('✓ PASSOU: ' + mensagem);
        } else {
            console.log('✗ FALHOU: Mensagem esperada não encontrada');
        }
        
        console.log('\n========================================');
        console.log('Testes finalizados!');
        console.log('========================================');
        
    } catch (error) {
        console.log('ERRO durante o teste:', error.message);
    } finally {
        // Aguarda 3 segundos antes de fechar (para visualizar)
        await driver.sleep(3000);
        
        // Fecha o navegador
        await driver.quit();
    }
}
// Fecha o navegador
await driver.quit();
}