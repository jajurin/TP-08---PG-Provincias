import ProvinceRepository from '../repositories/province-repository.js';


export default class ProvinceService {

    getAllAsync = async () => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }

    getByIdAsync = async (id) => {
      const repo = new ProvinceRepository();
        const returnArray = await repo.getAllAsync();
        return returnArray;

    }
    createAsync = async (entity) => {/* hacerlo */}
    updateAsync = async (entity) => {/* hacerlo */}
    deleteByIdAsync = async (id) => {/* hacerlo */}
}