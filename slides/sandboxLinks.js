console.log('sandoboxLinks.js loaded')

var sandboxData=[
    {
        info:"Traversing TCGA",
        url:"https://bit.ly/tcgascope"
    },
    {
        info:"NY patients",
        url:"https://bit.ly/ldsparcs"
    },
    {
        info:"Acountable Care",
        url:"https://bit.ly/pqiSuffolk"
    },
    {
        info:"DSRIP hospital data",
        url:"https://bit.ly/dsripspace"
    },
    {
        info:"Socialize",
        url:"https://bit.ly/tweetDSRIP",
        new:true // new window
    },
    {
        info:"Pathology",
        url:"https://bit.ly/tcgatil"
    },
    {
        info:"Tell Stories",
        url:"https://bit.ly/KMestimator"
    },
    {
        info:"Sample wearables",
        url:'https://bit.ly/healthbit',
        new:true
    },
    {
        info:'Web tech',
        url:"http://modulecounts.com",
        new:true
    },
    {
        info:'Convolutional NNs',
        url:"https://stanford.io/2DYoV0R",
    },
    {
        info:'TensorflowJS',
        url:"https://playground.tensorflow.org",
    },
    {
        info:'Vertically EDU',
        url:"https://web4bio.github.io/webgen/",
    },
    {
        info:'COVID-19',
        url:"https://bit.ly/coronaprog",
    },
    {
        info:'Mortality',
        url:"https://bit.ly/mortalitytracker",
    }
];

(function(){
    console.log('sandbox assembly')
    sandboxIfr.src=sandboxData[0].url
    sandboxData.forEach(function(dt,i){
        //tdLink
        li = document.createElement('p')
        li.style.fontSize="14px"
        li.style.lineHeight=1.2
        li.innerHTML = `<a href="${dt.url}" target="_blank" style="color:green">${dt.url.replace(/https:\/\//g,'')}</a><br>${dt.info} <button style="background-color:yellow" id="bt_${i}">&rarr;</button>`
        tdLink.appendChild(li)
        window['bt_'+i].onclick=function(){
            if(dt.new){
                window.open(dt.url)
            }else{
                sandboxIfr.src=dt.url
            }
            
        }
        //ebugger
    })
    //debugger
})()