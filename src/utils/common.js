import axios from 'axios'

//promise缓存
const cacheMap = new Map();

function enableCache(target, name, descriptor) {
    const val = descriptor.value
    descriptor.value = async function (...args) {
        const cacheKey = name + JSON.stringify(args)
        if (!cacheMap.get(cacheKey)) {
            const cacheValue = Promise.resolve(val.apply(this, args)).catch(e => {
                cacheMap.set(cacheKey, null)
            })
            cacheMap.set(cacheKey, cacheValue)
        }
        return cacheMap.get(cacheKey)
    }
    return descriptor
}

class PromiseClass {
    @enableCache
    static async getInfo() {
        return await axios.get('/api/login')
    }
}

export default PromiseClass