import ProvinceRepository from '../repositories/repository-province.js';


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
    createAsync = async (entity) => {
     const repo = new ProvinceRepository();
    const province = await repo.createAsync(entity);
    return province;
}
    updateAsync = async (entity) => {  
   const repo = new ProvinceRepository();
    const ProvincinciaExistente = await repo.getByIdAsync(entity.id);

    if (ProvincinciaExistente == null) {
        return null;
    }
    const province = await repo.updateAsync(entity);
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