// import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutosController {
    async index() {
        return [2, 5, 3]
    }
}