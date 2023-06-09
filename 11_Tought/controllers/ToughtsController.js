const Tought = require('../models/Tought')
const User = require('../models/User')

const { Op } = require('sequelize')
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
    let search = ''
    let order = 'DESC'

    if (req.query.search) {
      search = req.query.search
    }

    if (req.query.order === 'old') {
      order = 'ASC'
    } else {
      order = 'DESC'
    }

    const data = await Tought.findAll({
      include: User,
      where: {
        title: { [Op.like]: `%${search}%` },
      },
      order: [['createdAt', order]]
    })

    const toughts = data.map((tought) => tought.get({ plain: true })) // Get coloca tudo no mesmo array

    const total = toughts.length === 0 ? false : toughts.length

    res.render('toughts/home', { toughts, search, total })
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

  static async updateTought(req, res) {
    const id = req.params.id;

    const tought = await Tought.findOne({ where: { id: id }, raw: true })

    res.render('toughts/edit', { tought })
  }

  static async updateToughtPost(req, res) {
    try {
      const id = req.body.id;
      const tought = {
        title: req.body.title
      }

      await Tought.update(tought, { where: { id: id } })

      req.flash('message', 'Pensamento atualizado com sucesso!')

      req.session.save(() => {
        res.redirect('/toughts/dashboard')
      })
    } catch (error) {
      console.log(error)
    }
  }
}