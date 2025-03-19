function fetchData(url){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(url===""){
                resolve({message: 'Data fetched Successfully'});
            }else{
                reject('Invalid URL');
            }
        },2000);
    });
}