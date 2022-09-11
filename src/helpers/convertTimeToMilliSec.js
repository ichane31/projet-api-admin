// converting time to milliSeconde
export const Time = (time) => {
    let hours=0, minutes=0;
    let timeParts = time.split(":");
    if(timeParts[0]) hours = +timeParts[0] * (60000 * 60);
    if(timeParts[1]) minutes =  +timeParts[1] * 60000;
    return hours+ minutes
}


export const findIdCategory = (name, categories) => {
    const _category =  categories.filter(item => (
        item.name === name
    ));
    if(_category.length) return _category[0].id
}

export const getItemFromStorage = (key) => {
    const item = window.localStorage.getItem(key);
    if (item === undefined){
       return null;
    }
       return  JSON.parse(item)
};

export const setItemInStorage = (name, data) => {
    window.localStorage.setItem(name, JSON.stringify(data));
};

export const removeItemFromStorage = (name) => {
    window.localStorage.removeItem(name);
};