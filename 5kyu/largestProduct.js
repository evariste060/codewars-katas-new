function largest(string){
    let product = 0;
    for(let number=0;number<=string.length-5;number++){
        let currentProduct = [...string.slice(number,number+5)]
        .reduce((acc,curr)=>acc*curr,1);
        product=(currentProduct>product)? currentProduct :product;
    }
    return product
}
console.log(largest('123824539327238239583'));