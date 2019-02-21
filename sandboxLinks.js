console.log('sandoboxLinks.js loaded')

var sandboxData=[
    {
        info:"Traversing TCGA",
        url:"https://bit.ly/tcgascope"
    },
    {
        info:"NY patient encounters",
        url:"https://bit.ly/loadsparcs"
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
        info:"Tell Stories",
        url:"https://bit.ly/KMestimator"
    },
    {
        info:"Socialize what is public",
        url:"https://bit.ly/tweetDSRIP",
        new:true // new window
    },
    {
        info:"Sample wearables",
        url:'https://bit.ly/healthbit',
        new:true
    },
    {
        info:"Socialize data analysis",
        url:"https://bit.ly/vcfmrsa"
    },
    {
        info:"Socialize pathologists",
        url:"https://bit.ly/tcgatil"
    },
    {
        info:'Socialize SMS, try it at <br><span style="font-size:x-large;color:red">832 648 2521</span>',
        url:"https://messages.android.com",
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
        info:'Vertically integrated EDU',
        url:"https://web4bio.github.io/webgen/",
    },
    {
        info:'WebComp architecture',
        url:"https://bit.ly/webComp"
    },
    {
        info:'Privacy at the edge ...',
        url:'https://mylife.com',
        new:true
    }

    //https://medium.com/@sbrice/whats-is-npm-df503d773a7f
];

(function(){
    console.log('lala')
    sandboxIfr.src=sandboxData[0].url
    sandboxData.forEach(function(dt,i){
        //tdLink
        li = document.createElement('li')
        li.style.fontSize="14px"
        li.style.lineHeight=1.2
        li.innerHTML = `${dt.info} <button style="background-color:yellow" id="bt_${i}">&rarr;</button><br><a href="${dt.url}" target="_blank">${dt.url.replace(/https:\/\//g,'')}</a>`
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