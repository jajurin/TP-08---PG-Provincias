import { Router } from 'express';
import ProvinceService from './../services/province-service.js'
const router = Router();
const svc = new ProvinceService();  

router.get('', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if (returnArray != null){
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(500).send(`Error interno.`);
    }
    return respuesta;
});

router.get('/:id', async (req, res) =>    { 
    let respuesta;
    const province = await svc.getByIdAsync(req.params.id);
    if (province != null){
        respuesta = res.status(200).json(province);
    } else {
        respuesta = res.status(404).send(`Provincia no encontrada.`);
    }
    return respuesta;
}
)
router.post('', async (req, res) => {
    try {
        const province = await svc.createAsync(req.body);
        return res.status(201).json(province);

    } catch (error) {
        return res.status(400).send(error.message);
    }
}
)
;
router.put('', async (req, res) => {
    try {
        const province = await svc.updateAsync(req.body);
        if (province == null) {
            return res.status(404).send('Provincia no encontrada.');
        }
        return res.status(200).json(province);
    } catch (error) {
        return res.status(400).send(error.message);
    }
}
);
router.delete('/:id', async (req, res) => {    
    let respuesta;
    const deleted = await svc.deleteByIdAsync(req.params.id);
    if (deleted != null){
        respuesta = res.status(200).json(deleted);
    } else {
        respuesta = res.status(404).send(`Provincia no encontrada.`);
    }
    
    return respuesta;
})
export default router;