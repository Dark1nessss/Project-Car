const models = require('../../models')
const Carro = models.Carro
const Marca = models.Marca
const Modelo = models.Modelo
const ReservaCarro = models.ReservaCarro

const getCarros = async(req, res) => {
    const carros = await Carro.findAll({
        include: [
            {
                model: Marca,
                as: 'marca',
                attributes: ['nome']
            },
            {
                model: Modelo,
                as: 'modelo',
                attributes: ['nome']
            }
        ]
    })
    return carros
}

const renderReservaCarro = async(req, res) => {
    if(req.session.loggedIn){
        const carros = await getCarros()
        let carros_result = {error: "", result: []}
        for(let i in carros){
            carros_result.result.push({
                id: carros[i].id,
                ano: carros[i].ano,
                preco: carros[i].preco,
                marca: carros[i].marca.nome,
                modelo: carros[i].modelo.nome
            })
        }
        res.render('reservarcarro', {carros: carros_result.result,  cliente_id: req.session.cliente_id,})
    } else {
        res.redirect('/login')
    }
}

const renderReservasCliente = async(req, res) => {
const clienteId = req.session.cliente_id;

  if (!clienteId) {
    return res.status(401).json({ error: 'Not authorized' });
  }

  try {
    const reservas = await ReservaCarro.findAll({
      where: { cliente_id: clienteId },
      include: [
        {
          model: Carro,
          as: 'carro',
          include: [
            {
              model: Marca,
              as: 'marca',
              attributes: ['nome']
            },
            {
              model: Modelo,
              as: 'modelo',
              attributes: ['nome']
            }
          ]
        }
      ]
    });

    res.render('reservas', { reservas });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar reservas', details: error.message });
  }
}

module.exports = {
    renderReservaCarro,
    renderReservasCliente
}