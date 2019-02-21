console.log('sandoboxLinks.js loaded')

var sandboxData=[
    {
        info:"Traversing TCGA",
        url:"https://bit.ly/tcgascope"
    },
    {
        info:"Traversing NY patient encounters",
        url:"https://bit.ly/loadsparcs"
    },
    {
        info:"Acountable Care",
        url:"https://bit.ly/pqiSuffolk"
    },
    {
        info:"DSRIP hospital readmissions",
        url:"https://bit.ly/dsripspace"
    },
    {
        info:"Tell Stories",
        url:"https://bit.ly/KMestimator"
    },
    {
        info:"Socialize what is already public",
        url:"https://bit.ly/tweetDSRIP",
        new:true // new window
    },
    {
        info:"Sample wearable sensor",
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
        url:"https://bit.ly/modulecount",
    },
    {
        info:'Convolutional NNs',
        url:"https://stanford.io/2DYoV0R",
    },
    {
        info:'TensorflowJS',
        url:"https://playground.tensorflow.org",
    }

    //https://medium.com/@sbrice/whats-is-npm-df503d773a7f
];

(function(){
    console.log('lala')
    sandboxIfr.src=sandboxData[0].url
    sandboxData.forEach(function(dt,i){
        //tdLink
        li = document.createElement('li')
        li.style.fontSize="medium"
        li.style.lineHeight=1.2
        li.innerHTML = `${dt.info} <button style="background-color:yellow" id="bt_${i}">&rarr;</button> <a href="${dt.url}" target="_blank">${dt.url.replace(/https:\/\//g,'')}</a>`
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