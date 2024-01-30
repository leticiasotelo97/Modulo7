import frutaService from "../service/fruta.service";

class FrutaController {
    async createFrutas(request,response){
        try{
            const id =await frutaService.createFruta(request.body);
            request.status(201).json(id);
        }catch (error){
            console.error(error)
            return response.status(500).send('Internal Server Error')
        }

    }
    async getFrutasById(request,response){
        try{
            const id=request.params.id;
            const fruta=await frutaService.getFrutaById(id);

            if(!fruta){
                return response.status(404).send('Fruta not fount');
            }
            return response.status(201).json(fruta)
        } catch (error){
            console.error(error)
            return response.status(500).send('Internal Server Error')
        }

    }
    async updateFruta(request,response){
        try{
            const id =request.params.id;
            const update = request.body;
            const success= await frutaService.updateFruta(id,update)

            if(!success) {
                return response.status(404).send('Fruta not found');
            }
           return request.status(201).send('Fruta actualizada');
        }catch (error){
            console.error(error)
            return response.status(500).send('Internal Server Error')
        }
    }
    async deleteFruta(request,response){
        try{
            const id =request.params.id;
            const success= await frutaService.deleteFruta(id)

            if(!success) {
                return response.status(404).send('Fruta not found');
            }
           return request.status(201).send('Fruta borrada');
        }catch (error){
            console.error(error)
           return response.status(500).send('Internal Server Error')
        }
    }
}

export default new FrutaController();