const loadPhone=(searchTex)=>{
    const url=` https://openapi.programming-hero.com/api/phones?search=${searchTex}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhones(data.data))
}
const displayPhones=phones=>{
console.log(phones)
const phoneContainr=document.getElementById('phone-conntainer')
phoneContainr.innerText='';
phones=phones.slice(0,30)
const noPhone=document.getElementById('no-phone')
if(phones.length===0){
    noPhone.classList.remove('d-none');
}
else{
    noPhone.classList.add('d-none');
}

for(const phone of phones){
    const phoneDiv=document.createElement('div');
    phoneDiv.classList.add('col');
    phoneDiv.innerHTML=`
                    <div class="card">
                    <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.brand}</h5>
                      <h6 class="card-title">${phone.phone_name}</h6>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loadphoneModal">Show Details</button>
                      </div>
                  </div>
    `;
    phoneContainr.appendChild(phoneDiv);
   
}
loderphone(false)
}
document.getElementById('btn-search').addEventListener('click',function(){
    loderphone(true);
    const searchField=document.getElementById('seacrh-field');
    const searchTex=searchField.value;
    loadPhone(searchTex)
})
document.getElementById('seacrh-field').addEventListener('keypress', function (e) {
    
    if (e.key === 'Enter') {
        
    const searchField=document.getElementById('seacrh-field');
    const searchTex=searchField.value;
    loadPhone(searchTex)
    }
});

const loderphone=spinner=>{
    const loder=document.getElementById('loder');
if(spinner){
    loder.classList.remove('d-none');
}
else{
    loder.classList.add('d-none');
}
}
const loadPhoneDetails=id=>{
    const url=`https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayPhoneDetails(data.data))
}
const displayPhoneDetails=phone=>{
    console.log(phone);
    const modaltitle=document.getElementById('loadphoneModalLabel');
    modaltitle.innerText=phone.name;
    const otherDetails=document.getElementById('others-Details');
    otherDetails.innerHTML=`
    <p>${phone.releaseDate}</p>
    <p>Prosessor:${phone.mainFeatures.chipSet}</p>

    <p>Storage:${phone.mainFeatures.storage}</p>
    `;
}

// loadPhone();