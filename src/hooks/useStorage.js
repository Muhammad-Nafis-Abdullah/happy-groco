import { useState } from "react";

const getStorage = (storageName,storageType)=> {
    let storage = localStorage.getItem(storageName);
    if (storage) {
        storage = JSON.parse(storage);
    }
    else{
        storage = storageType;
    }
    return storage;
}


const useStorage = (storageName,storageType=[])=> {
    
    const [storageData,setStorageData] = useState(getStorage(storageName,storageType));

    const setStorage = (data)=>{
        const dataStringify = JSON.stringify(data);
        localStorage.setItem(storageName,dataStringify);
        setStorageData(getStorage(storageName,storageType));
    }
    
    return [storageData,setStorage];
}

function setQuantity(storageName,item,quantifier=1) {
    let count = item.quantity;
    const storedItems = [...getStorage(storageName,[])];
    const findItem = storedItems.find(storeItem => storeItem.id === item.id);
    if(quantifier===1){
        if (findItem) {
            count = +findItem.quantity + 1;
            findItem.quantity = count;
        }else{
            count = 1;
            item.quantity = count;
            storedItems.push(item);
        }
    }
    else if(quantifier===-1){
        if (findItem) {
            count = findItem.quantity>0?+findItem.quantity - 1:0;
            findItem.quantity = count;
        }else{
            count = 0;
            item.quantity = count;
            storedItems.push(item);
        }
    }
    return [count,storedItems];
}


const findQuantity = (storageName,targetItem)=> {
    const storedItems = [...getStorage(storageName,[])];
    const getItem = storedItems.find(item => item.id===targetItem.id);

    return getItem?getItem.quantity:0;
}

export {useStorage,setQuantity,findQuantity};