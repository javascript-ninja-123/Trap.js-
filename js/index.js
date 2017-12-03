// function starts here
(function() {
    //prototype Syntax 
    let Arraypro = Array.prototype;
    let Objectpro = Object.prototype;
    let Funpro = Function.prototype;





    //Array clone
    Arraypro.clone = function() {
        let clone = JSON.parse(JSON.stringify(this));
        return clone;
    }

    //Array multiply
    Arraypro.multiply = function(item) {
        if (typeof item === 'number') {
            return this.map(value => {
                return value * item
            })
        } else {
            console.warn('please type a number')
        }
    }

    //Array divide
    Arraypro.divide = function(item) {
        if (typeof item === 'number') {
            return this.map(value => {
                return value / item;
            })
        } else {
            console.warn('please type a number')
        }
    }

    //Array multipleOf
    Arraypro.multipleOf = function(item) {
            if (typeof item === 'number') {
                return this.filter(value => {
                    return value % item === 0;
                })
            } else {
                console.warn('please type a number')
            }
        }
        //Array integer
    Arraypro.findInteger = function() {
            return this.filter(value => {
                return Number.isInteger(value);
            })
        }
        //Array findString
    Arraypro.findStr = function() {
            return this.filter(value => {
                if (typeof value === 'string') {
                    return value;
                }
            })
        }
        //Array find Function
    Arraypro.findFunc = function() {
            return this.filter(value => {
                if (typeof value === 'function') {
                    return value;
                }
            })
        }
        //Array find object
    Arraypro.findObj = function() {
            return this.filter(value => {
                if (typeof value === 'object') {
                    return value;
                }
            })
        }
        //find array
    Arraypro.findArr = function() {
            return Object.prototype.toString.apply(this);
        }
        //Array find a min
    Arraypro.min = function() {
            return Math.min(...this)
        }
        //Array find a max
    Arraypro.max = function() {
            return Math.max(...this)
        }
        //Array find a first
    Arraypro.first = function() {
            return this.filter(value => {
                if (value === this[0]) {
                    return value;
                }
            })
        }
        //Array find a last
    Arraypro.last = function() {
            return this.filter(value => {
                if (value === this[this.length - 1]) {
                    return value;
                }
            })
        }
        //find a indexof element
    Arraypro.findIndex = function(item) {
            if (this.indexOf(item) === null || this.indexOf(item) === undefined) {
                return -1;
            }
            return this.indexOf(item);
        }
        //spit out a random element
    Arraypro.random = function() {
            let value = Math.floor((Math.random() * this.length) + 1)
            return this[value];
        }
        //filter item
    Arraypro.except = function(item) {
            return this.filter(value => {
                if (value !== item) {
                    return value;
                }
            })
        }
        //only spitout Number
    Arraypro.onlyNum = function() {
            return this.filter(value => {
                if (typeof value === 'number') {
                    return value;
                }
            })
        }
        //Array combine
    Arraypro.combine = function(...arr) {
        return this.concat(...arr);
    }

    //Array unique elements
    Arraypro.clean = function() {
        return [...(new Set(this))];
    }

    //Array shuffle
    Arraypro.shuffle = function() {
        for (var i = this.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;

        }
        return this
    }

    //Array random sample
    Arraypro.sample = function(num) {
        let newArray = this.shuffle();
        return newArray.slice(0, Math.max(null, num))
    }

    //Array union
    Arraypro.union = function(...arr) {
        let combine = this.combine(...arr);
        let union = [...new Set(combine)]
        return union;
    }

    //Array intersect
    Arraypro.intersect = function(arr) {
        let set = [...new Set(arr)];
        return this.filter(value => set.includes(value))

    }

    //Array difference
    Arraypro.difference = function(arr) {
            let set = [...new Set(arr)]
            return this.filter(value => !set.includes(value));
        }
        //Array without
    Arraypro.without = function(...values) {
        let set = [...new Set(this)];
        let array = [];
        array.push(...values)
        return this.difference(array);
    }

    //array make it object
    Arraypro.makeObj = function(list, values) {
            let map = new Map();
            for (let i = 0, j = 0; i < list.length, j < values.length; i++, j++) {
                map.set(list[i], values[j])
            }
            return map;
        }
        //Array index odd
    Arraypro.indexOdd = function() {
            return this.filter((value, index) => {
                return index % 2 !== 0
            })
        }
        //Array index even
    Arraypro.indexEven = function() {
        return this.filter((value, index) => {
            return index % 2 === 0
        })
    }
    //Array change
    Arraypro.change = function(fn){
        return Array.from(this,fn)
    }
    //Array create
    Arraypro.create = function(...value){
        let newArray = Array.of(...value)
        return newArray;
    }

    //////////// Object
    //get keys of object
    Objectpro.keys = function() {
            return Object.keys(this);
        }
        //get values of object
    Objectpro.values = function() {
            return Object.values(this)
        }
        //map for Object
    Objectpro.mapObject = function(fn) {
            let values = Object.values(this).map(value => {
                return fn(value)
            })
            let keys = Object.keys(this);
            var newMap = new Map();
            for (let i = 0, j = 0; i < values.length, j < keys.length; i++, j++) {
                newMap.set(keys[j], values[i])
            }
            return newMap;
        }
        //change keys
    Objectpro.changeKeys = function(fn) {
            let keys = Object.keys(this).map(key => {
                return fn(key)
            })
            let values = Object.values(this);
            var newMap = new Map();
            for (let i = 0, j = 0; i < values.length, j < keys.length; i++, j++) {
                newMap.set(keys[j], values[i])
            }
            return newMap;
        }
        //Object clone
    Objectpro.clone = function(obj) {
            return Object.assign({}, obj)
        }
        //Object merge
    Objectpro.merge = function(...obj) {
            return Object.assign(this, ...obj)
        }
        //object has value  -value check
    Objectpro.has = function(item) {
            var newMap = new Map();
            for (let i = 0, j = 0; i < Object.values(this).length, j < Object.keys(this).length; i++, j++) {
                newMap.set(Object.keys(this)[j], Object.values(this)[i])
            }
            return newMap.has(item);
        }
        //object push
    Objectpro.pushObject = function(key, value) {
            var newMap = new Map()
            for (let i = 0, j = 0; i < Object.values(this).length, j < Object.keys(this).length; i++, j++) {
                newMap.set(Object.keys(this)[j], Object.values(this)[i])
            }
            return newMap.set(key, value);
        }
        //object delete
    Objectpro.delete = function(key) {
            var newMap = new Map()
            for (let i = 0, j = 0; i < Object.values(this).length, j < Object.keys(this).length; i++, j++) {
                newMap.set(Object.keys(this)[j], Object.values(this)[i])
            }
            newMap.delete(key);
            return newMap;
        }
        //Ojbect becomes empty
    Objectpro.empty = function() {
        var newMap = new Map()
        for (let i = 0, j = 0; i < Object.values(this).length, j < Object.keys(this).length; i++, j++) {
            newMap.set(Object.keys(this)[j], Object.values(this)[i])
        }
        newMap.clear()
        return newMap;
    }




})();
