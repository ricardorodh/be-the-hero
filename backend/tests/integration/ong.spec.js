const resquest = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();//zero o banco de dados
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await resquest(app)
        .post('/ongs')
        .send({
            name: "APAD2",
            email: "contato@fjks.com",
            whatsapp: "4700000000",
            city: "Rio do Sul",
            uf: "SC"	
        });

        
    });
})