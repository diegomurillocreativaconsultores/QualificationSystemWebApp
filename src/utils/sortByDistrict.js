export function sortByDistrict(data) {
    const order = ["ayutuxtepeque", "ciudad-delgado", "san-salvador", "mejicanos", "cuscatancingo"];
    const orderMap = order.reduce((map, district, index) => {
        map[district] = index;
        return map;
    }, {});
    return data.sort((a, b) => orderMap[a.district] - orderMap[b.district]);
}