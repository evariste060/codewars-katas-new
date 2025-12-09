function domainName(url){
    const unWanted = ['https:','http:',"www",'com','']
    return url.split('/').filter(e=>!unWanted.includes(e)).map(e=>{
        return e.split('.').filter(e=>!unWanted.includes(e));
    }).flat()[0]
}
console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))