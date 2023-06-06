const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const MAX_ATTEMPTS = 3;
module.exports = class AuthController {

  static login(req, res) {
    res.render('auth/login')
  }

  static async loginPost(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email: email } })

    let attempts = req.session.loginAttempts || 0;

    if (attempts >= MAX_ATTEMPTS) {
      req.flash('message', 'Número máximo de tentativas excedido. Redefina sua senha.')
      res.redirect('/reset-password'); // TODO: criar view para redefinir senha
      return
    }

    if (!user) {
      req.flash('message', 'Usuário não econtrado!')
      res.render('auth/login')
      return
    }

    const passwordChecked = bcryptjs.compareSync(password, user.password)

    if (!passwordChecked) {
      req.flash('message', 'Senha inválida')
      req.session.loginAttempts = (req.session.loginAttempts || 0) + 1;
      res.render('auth/login')
      return
    }

    // Inicializa a sessão com o id do usuário criado
    req.session.userid = user.id

    req.flash('message', 'Autenticação realizada com sucesso!')

    // Salve a sessão antes de redirecionar para persistir em todas as solicitações
    req.session.save(() => {
      res.redirect('/')
    })
  }

  static register(req, res) {
    res.render('auth/register')
  }

  static async registerPost(req, res) {
    const { name, email, password, confirmpassword } = req.body;

    if (password !== confirmpassword) {
      req.flash('message', 'As senhas não conferem, tente novamente!')
      res.render('auth/register')
      return
    }

    const checkIfUserExists = await User.findOne({ where: { email: email } })

    if (checkIfUserExists) {
      req.flash('message', 'O email já está em uso!')
      res.render('auth/register')
      return
    }

    const salt = bcryptjs.genSaltSync(10) // Sequência de chars aleátorios
    const hashedPassword = bcryptjs.hashSync(password, salt) // Concatena a senha do usuário com o salt

    const user = {
      name,
      email,
      password: hashedPassword
    }

    try {
      const createdUser = await User.create(user)

      // Inicializa a sessão com o id do usuário criado
      req.session.userid = createdUser.id

      req.flash('message', 'Cadastro realizado com sucesso!')

      // Salve a sessão antes de redirecionar para persistir em todas as solicitações
      req.session.save(() => {
        res.redirect('/')
      })
    } catch (error) {
      console.log(error)
    }


  }

  static logout(req, res) {
    req.session.destroy()
    res.redirect('/login')
  }
}