import ProvinceRepository from '../repositories/repository-province.js';
import Province from '../entities/province.js';


export default class ProvinceService {

    getAllAsync = async () => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }

  getByIdAsync = async (id) => {

    const repo = new ProvinceRepository();
    const province = await repo.getByIdAsync(id);
    return province;
}
        createAsync = async (body) => {
    if (!body.name) {
   throw new Error("El nombre es obligatorio.");
            }
            
   if (!body.name || body.name.trim().length < 3) {
        throw new Error("El nombre debe tener al menos 3 caracteres.");
    }
    if (body.latitude == null) {
        throw new Error("La latitud es obligatoria.");
    }
    if (body.longitude == null) {
        throw new Error("La longitud es obligatoria.");
    }
    const repo = new ProvinceRepository();
    const province = await repo.createAsync(body);

    return province;
}
updateAsync = async (body) => {  
   const repo = new ProvinceRepository();
    const provinciaExistente = await repo.getByIdAsync(body.id);
    if (provinciaExistente == null) {
        return null;
    }
     if (!body.name) {
   throw new Error("El nombre es obligatorio.");
            }
    if (!body.name || body.name.trim().length < 3) {
        throw new Error("El nombre debe tener al menos 3 caracteres.");
    }
    if (body.latitude == null) {
        throw new Error("La latitud es obligatoria.");
    }
    if (body.longitude == null) {
        throw new Error("La longitud es obligatoria.");
    }
    const province = await repo.updateAsync(body);

    return province;
}
    deleteByIdAsync = async (id) => {  
    const repo = new ProvinceRepository();
    const ProvincinciaExistente = await repo.getByIdAsync(id);

    if (ProvincinciaExistente == null) {
        return null;
    }
    const province = await repo.deleteByIdAsync(id);
    return province;}
}