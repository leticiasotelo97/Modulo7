


class inventService{
    async createProducto(inventDto){
        const{nombre,marca, categoría, dimensiones,cantidad,precio} = inventDto
        return inventDto.createFruta(nombre,marca, categoría, dimensiones,cantidad,precio)
    }


    async getProductoById(id){
    
        return inventDto.getProductoById(id)
    }

    async updateProducto(id,updates){
        return inventDto.updateProducto(id,updates)
    }

    async deleteProducto(id){
        return inventDto.deleteProducto(id)
    }
    
}

export default new inventService();