// comparing two objects with same data with diff order
let obj1={name:"person1",age:5};
let obj2={age:5,name:"person1"};
for(const key in obj1){
    if(obj1[key]!=obj2[key]){
        console.log("objects are not same");
    }
    else{
        continue;
    }
}
console.log("objects are same");


// api call to restapi and printing the flags and other country details
async function getCountry(){
    try{
        const result = await fetch("https://restcountries.com/v3.1/all")    
        const resp= await result.json();
        foo(resp);
        // console.log("after foo");
    }
    catch{(err) => {
        console.error(err);    
    }};


    function foo(data){
        data.forEach(element =>{
            // console.log("rest countries data")

            // let container = document.createElement('div');
            // container.setAttribute('class','container');
            
            // let row=document.createElement('div');
            // row.setAttribute('class','row');

            let row=document.getElementById('row');

            let col=document.createElement('div');
            col.setAttribute('class','col-4 mb-3');

            let card=document.createElement('div');
            card.setAttribute('class','card h-100');

            let cardImg=document.createElement('img');
            cardImg.setAttribute('class','card-img-top')
            cardImg.setAttribute('src',element.flags.png);

            let cardbody=document.createElement('div');
            cardbody.setAttribute('class','card-body');

            let cardTitle=document.createElement('h4')
            cardTitle.setAttribute('class','card-title');
            cardTitle.innerHTML=element.name.common;

            let cardText=document.createElement('p');
            cardText.innerHTML="Country:"+element.name.common + " region: " + element.region + " subregion: " + element.subregion+" Population: "+ element.population;

            // printing country name, region, subregion, population in console
            console.log("Country:"+element.name.common + ", region: " + element.region + ", subregion: " + element.subregion+", Population: "+ element.population);

            cardbody.append(cardText,cardTitle);
            card.append(cardbody,cardImg);

            col.append(card);
            row.append(col);
            // container.append(row);
            // document.body.append(container);
        
        });
    }
}

getCountry();
