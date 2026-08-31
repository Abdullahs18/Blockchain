const Block = require('./block');

describe('mineBlock()', () => {
    const lastBlock = Block.genesis();
    const data = ['transaction1', 'transaction2'];

    const minedBlock = Block.mineBlock({
        lastBlock,
        data
    });

    it('creates a Block instance', () => {
        expect(minedBlock instanceof Block).toBe(true);
    });

    it('sets the lastHash to the previous block hash', () => {
        expect(minedBlock.lastHash).toEqual(lastBlock.hash);
    });

    it('sets the data correctly', () => {
        expect(minedBlock.data).toEqual(data);
    });

    it('creates a hash', () => {
        expect(minedBlock.hash).toBeTruthy();
    });
});