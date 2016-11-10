function validateProperties (id, name, manufacturer, description, genres, targetPrice) {
    if (typeof(id) !== 'number') {
        throw new TypeError('Invalid id: '+ id);
    }

    if (name !== 'string') {
        throw new TypeError('Invalid name: '+ name);
    }

    if (manufacturer !== 'string') {
        throw new TypeError('Invalid manufacturer: '+ manufacturer);
    }

    if (description !== 'string') {
        throw new TypeError('Invalid description: '+ description);
    }

    if (!Array.isArray(genres)) {
        throw new TypeError('Invalid genres: '+ genres);
    }

    for (let genre of genres) {
        if (typeof(genre) !== 'string') {
            throw new TypeError('Invalid genre: '+ genre);
        }
    }

    if (typeof(targetPrice) !== 'number') {
        throw new TypeError('Invalid genre: '+ targetPrice);
    }
}

class BasePunchStarter {
    constructor (id, name, manufacturer, description, genres, targetPrice) {
        if (new.target === BasePunchStarter) {
            throw new Error('Cannot create an instance of an abstract class');
        }
        validateProperties(id, name, manufacturer, description, genres, targetPrice);

        this._id = id;
        this._name = name;
        this._manufacturer = manufacturer;
        this._description = description;
        this._genres = genres;
        this._targetPrice = targetPrice;
        this.accumulatedMoney = 0;
    }

    get id () {
        return this._id;
    }

    get name () {
        return this._name;
    }

    get manufacturer () {
        return this._manufacturer;
    }

    get description () {
        return this._description;
    }

    get genres () {
        return this._genres;
    }

    get targetPrice () {
        return this._targetPrice;
    }

    set accumulatedMoney (value) {
        if (typeof(value) !== 'number') {
            throw new TypeError('Invalid accumulatedMoney: ' + value);
        }

        this._accumulatedMoney = value;
    }

    get accumulatedMoney () {
        return this._accumulatedMoney;
    }
}

module.exports = BasePunchStarter;