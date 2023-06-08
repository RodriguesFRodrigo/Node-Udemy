const Tought = require('../models/Tought')
const User = require('../models/User')

module.exports = class ToughtsController {
  static async dashboard(req, res) {
    const userId = req.session.userid;

    const user = await User.findOne(
      {
        where: {
          id: userId
        },
        include: Tought, // Junção para trazer os pensamentos do usuário da sessão
        plain: true
      },
    )

    if (!user) {
      res.redirect('/login')
    }

    const toughts = user.Toughts.map((tought) => tought.dataValues)

    const hasToughts = !toughts.length

    res.render('toughts/dashboard', { toughts, hasToughts })
  }

  static async showToughts(req, res) {
    res.render('toughts/home')
  }

  static createTought(req, res) {
    res.render('toughts/create')
  }

  static async createToughtPost(req, res) {
    try {
      const tought = {
        title: req.body.title,
        UserId: req.session.userid // Obter o id salvo na sessão é mais seguro do que usar input hidden
      }

      await Tought.create(tought)

      req.flash('message', 'Pensamento criado com sucesso!')

      req.session.save(() => {
        res.redirect('/toughts/dashboard')
      })
    } catch (error) {
      console.log(error)
    }
  }

  static async removeTought(req, res) {
    try {
      const id = req.body.id
      const UserId = req.session.userid

      await Tought.destroy({ where: { id: id, UserId: UserId } })

      req.session.save(() => {
        res.redirect('/toughts/dashboard')
      })
    } catch (error) {
      console.log(error)
    }

  }
}