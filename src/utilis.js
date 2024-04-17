export const getImageUrl=(path)=>{
    console.log(new URL(`/assests/${path}`,import.meta.url).href);
    return new URL(`/assests/${path}`,import.meta.url).href;
};

