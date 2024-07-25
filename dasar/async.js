function samplePromise() {
    return Promise.resolve('Bain');
}


async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();