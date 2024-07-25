function samplePromise() {
    return Promise.resolve('Bain')
}

const name = await samplePromise()
console.info(name)