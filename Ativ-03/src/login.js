function validateLogin(email, password) {
  
  const cleanEmail = email?.toString().trim();
  const cleanPassword = password?.toString();

  if (!cleanEmail) {
    return { success: false, message: 'E-mail é obrigatório' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(cleanEmail)) {
    return { success: false, message: 'E-mail inválido' };
  }

  // AQUI ESTAVA O SEU ERRO: Separamos as duas validações
  if (!cleanPassword || cleanPassword === '') {
    return { success: false, message: 'Senha é obrigatória' };
  }

  if (cleanPassword.length < 6) {
    return { success: false, message: 'Senha deve ter no mínimo 6 caracteres' };
  }

  return { success: true, message: 'Login válido' };
}

module.exports = { validateLogin };