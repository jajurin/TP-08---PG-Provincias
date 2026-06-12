import ProvinceRepository from '../repositories/repository-province.js';
import { validarProvincia } from '../helpers/validaciones-helper.js';


export default class ProvinceService {

    getAllAsync = async () => {
        const repo = new ProvinceRepository()   
        const returnArray = await repo.getAllAsync()
        return returnArray
    }

  getByIdAsync = async (id) => {

    const repo = new ProvinceRepository();
    const province = await repo.getByIdAsync(id)
    return province;
}
   createAsync = async (body) => {
    validarProvincia(body)
    const repo = new ProvinceRepository()
    return await repo.createAsync(body)
}
updateAsync = async (body) => {
    
    const repo = new ProvinceRepository();
    const provinciaExistente = await repo.getByIdAsync(body.id)
    if (provinciaExistente == null) {
        return null
    }
    validarProvincia(body);
    return await repo.updateAsync(body)
}
    deleteByIdAsync = async (id) => {  
    const repo = new ProvinceRepository()
    const ProvincinciaExistente = await repo.getByIdAsync(id)

    if (ProvincinciaExistente == null) {
        return null;
    }
    const province = await repo.deleteByIdAsync(id)
    return province;}
}