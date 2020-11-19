import express from 'express';
const router = express.Router();

// importar el modelo nota
import Material from './../models/models';

// Agregar material
router.post('/material-nuevo', async(req, res) => {
  const body = req.body;  
  try {
    const materialDB = await Material.create(body);
    res.status(200).json(materialDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});
// Obtener material
router.get('/material/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const materialDB = await Material.findOne({_id});
      res.json(materialDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
// Obtener material
router.get('/material', async(req, res) => {
    try {
      const materialDB = await Material.find();
      res.json(materialDB);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
// Exportamos la configuración de express app
module.exports = router;