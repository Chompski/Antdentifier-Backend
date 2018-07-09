process.env.NODE_ENV = 'test';

const app = require('../app')
const request = require('supertest')(app)
const { expect } = require('chai');
const seed = require('../seed/seed');
const antdata = require('../seed/testData/antdata.json')
const mongoose = require('mongoose')

describe('API endpoints', () => {
    before(() => {
        return seed(antdata).then((docs) => {
        })
    })

    after(() => {
        mongoose.disconnect()
    })

    it('PASSES /GET /api/ants', () => {
        return request
            .get('/api/ants')
            .then(res => {
                expect(res.body.length).to.equal(10)
                expect(res.body[0].species).to.equal("Camponotus ligniperdus")
            })
    });

    it('PASSES /GET /api/ants?colour=red', () => {
        return request
            .get('/api/ants?colour=red')
            .then(res => {
                expect(res.body.length).to.equal(3)
                expect(res.body[0].species).to.equal('Messor barbarus')
            })
    });

    it('FAILS /GET /api/ants?colour=purple', () => {
        return request
            .get('/api/ants?colour=purple')
            .expect(200)
            .then(res => {
                expect(res.body.length).to.equal(0)
            })
    });

    it('PASSES /GET /api/ants?colour=yellow&location=united kingdom', () => {
        return request
            .get('/api/ants?colour=yellow&location=united kingdom')
            .then(res => {
                expect(res.body.length).to.equal(1)
                expect(res.body[0].species).to.equal('Lasius flavus')
            })
    });
})

