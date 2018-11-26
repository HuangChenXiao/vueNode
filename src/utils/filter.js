
let PayMethod = value => {
    var valMap = {
        1: 'X',
        2: 'S',
        3: 'S1',
    }
    return valMap[value]
}

export { PayMethod }