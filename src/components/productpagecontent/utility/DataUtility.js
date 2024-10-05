import SpicesData from "../data/SpicesData";

export const getTitleKey = (subCategory) => {
    for (const key in SpicesData) {
        if (SpicesData[key].variety_id === subCategory) {
            return key;
        }
    }
    return null;
}

export const getProductOrigin = (subCategory , dataKey) => {
    const originCategory = getTitleKey(subCategory);
    if (originCategory && SpicesData[originCategory]) {
        return SpicesData[originCategory][dataKey];
    }
    return null;
}
