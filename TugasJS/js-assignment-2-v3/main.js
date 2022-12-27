function convertItems(items) {
    var items1=[];
    for (i=0; i<items.length;i++){

        items1.push (items[i].split("|"));
    }
    return (items1);
}
function filterItems(items) {
    const filter = items.filter(item => item.length > 1);
    filter.forEach(fil => fil[1] = parseInt(fil[1]));
    return filter;
}

function generateSpareParts(items) {
    const arrObj = items.map(item => {
        const obj = {};
        obj.name = item[0];
        obj.price = item[1];
        obj.category = item[2];
        return obj;
    })
    return arrObj;
}

function itemsStatistics(items) {
    const variation = items.filter(item => item[2] === 'variation').length;
    const bodyParts = items.filter(item => item[2] === 'bodyParts').length;
    const electricity = items.filter(item => item[2] === 'electricity').length;
    const obj = {
        'variation': variation,
        'bodyParts': bodyParts,
        'electricity': electricity
    }
    return obj;
}

function generateItemsData(items) {
    const convert = convertItems(items);
    const filter = filterItems(convert);
    const spare = generateSpareParts(filter);
    const statistics = itemsStatistics(filter);

    const itemsData = {
        'spare_parts' : spare,
        'statistics': statistics
    }
    return itemsData;
}

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

console.log(generateItemsData(items));


module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}