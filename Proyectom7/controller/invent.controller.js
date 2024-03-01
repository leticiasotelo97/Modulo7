import inventService from "../service/invent.service";

class InventController {
    async createProducto(request,response){
        try{
            const id =await inventService.createProducto(request.body);
            return response.status(201).json(id);
        }catch (error){
            console.error(error)
            return response.status(500).send('Internal Server Error')
        }

    }
    async getProductoById(request,response){
        try{
            const id=request.params.id;
            const producto=await inventService.getProductoById(id);

            if(!producto){
                return response.status(404).send('Producto not fount');
            }
            return response.status(201).json(fruta)
        } catch (error){
            console.error(error)
            return response.status(500).send('Internal Server Error')
        }

    }
    async updateProducto(request,response){
        try{
            const id =request.params.id;
            const update = request.body;
            const success= await inventService.updateProducto(id,update)

            if(!success) {
                return response.status(404).send('Producto not found');
            }
           return response.status(201).send('Producto actualizado');
        }catch (error){
            console.error(error)
            return response.status(500).send('Internal Server Error')
        }
    }
    async deleteProducto(request,response){
        try{
            const id =request.params.id;
            const success= await inventService.deleteProducto(id)

            if(!success) {
                return response.status(404).send('Producto not found');
            }
           return response.status(201).send('Producto borrado');
        }catch (error){
            console.error(error)
           return response.status(500).send('Internal Server Error')
        }
    }
}

export default new InventController();