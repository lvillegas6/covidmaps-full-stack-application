export default class Dictionary {

    items: object

    constructor() {
        this.items = {}
    }

    has(key: string) {
        return this.items.hasOwnProperty(key)
    }

    set(key: string, value: Object) {
        this.items[key] = value

        setTimeout(() => {
            if(this.has(key))
                this.remove(key)
        }, 600 * 1000)
    }

    remove(key: string) {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }

        return false
    }

    get(key: string) {
        return this.has(key) ? this.items[key] : undefined
    }

    values() {
        const values: any = []
        for (let key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key])
            }
        }
        return values
    }

    size() {
        return Object.keys(this.items).length
    }

    keys() {
        const keys: any = []
        for (let key in this.items) {
            keys.push(key)
        }
        return keys
    }

    getItems() {
        return this.items
    }
}