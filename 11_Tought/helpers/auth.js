module.exports.checkAuth = function (req, res, next) {
  // Obtenha o ID do usuário autenticado na sessão
  const userId = req.session.userid;

  // Se o usuário não estiver autenticado, ele redireciona para a página de login
  if (!userId) {
    res.redirect("/login")
  }

  // O usuário pode prosseguir
  next()
}