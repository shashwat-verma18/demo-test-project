const url = `http://localhost:4000/company`;

var rate;

document.querySelectorAll('input[type="radio"]').forEach(function (radio) {
    radio.addEventListener('change', function () {
        rate = this.value;
    });
});

function submitReview() {
    var companyName = document.getElementById('companyName').value;
    var pros = document.getElementById('pros').value;
    var cons = document.getElementById('cons').value;

    let obj = {
        companyName,
        pros,
        cons,
        rate
    }

    axios.post(`${url}/addReview`, obj)
        .then(respond => {
            alert('Review added successfully !');
            window.top.location = window.top.location;
        })
        .catch(err => console.log(err));
}

function checkRating() {
    var divContainer = document.getElementById('ratingDisplay');
    divContainer.innerHTML = null;

    var companyName = document.getElementById('checkCompanyName').value;

    axios.get(`${url}/getReview/${companyName}`)
        .then((respond) => {
            console.log(respond);
            let rating = 0;
            for (var i = 0; i < respond.data.length; i++) {
                rating = rating + respond.data[i].rate;
            }

            rating = rating / respond.data.length;

            showCompanyTitle(respond.data[0].companyName, rating);

            for (var i = 0; i < respond.data.length; i++) {
                showEachRating(respond.data[i]);
            }

        })
        .catch(err => console.log(err));

}

function showCompanyTitle(name, rating) {
    var divContainer = document.getElementById('ratingDisplay');

    var heading2 = document.createElement('h2');
    heading2.style.padding = '5px';
    var companyName = document.createTextNode(`Company Name : ${name}`);
    heading2.appendChild(companyName);
    divContainer.append(heading2);

    var heading3 = document.createElement('h3');
    heading3.style.padding = '5px';
    var overallRating = document.createTextNode(`Rating : ${rating}`);
    heading3.appendChild(overallRating)
    divContainer.appendChild(heading3);
}

function showEachRating(obj) {

    var pros = obj.pros;
    var cons = obj.cons;
    var rating = obj.rate;

    var rate;

    switch (rating) {
        case 1:
            rate = "★";
            break;
        case 2:
            rate = "★★";
            break;
        case 3:
            rate = "★★★";
            break;
        case 4:
            rate = "★★★★";
            break;
        case 5:
            rate = "★★★★★";
            break;
    }

    var divContainer = document.getElementById('ratingDisplay');

    var div1 = document.createElement('div');
    div1.style.padding = '5px';

    var prosT = document.createTextNode('Pros : ');
    var br = document.createElement('br');
    var prosCont = document.createTextNode(`${pros}`);
    
    div1.appendChild(prosT);
    div1.appendChild(br);
    div1.appendChild(prosCont);

    divContainer.append(div1);

    var div2 = document.createElement('div');
    div2.style.padding = '5px';

    var consT = document.createTextNode('Cons : ');
    var br = document.createElement('br');
    var consCont = document.createTextNode(`${cons}`);
    
    div2.appendChild(consT);
    div2.appendChild(br);
    div2.appendChild(consCont);

    divContainer.append(div2);

    var div3 = document.createElement('div');
    div3.style.padding = '5px';

    var compRate = document.createTextNode(`Rating : ${rate}`);
    
    div3.appendChild(compRate);

    divContainer.append(div3);

    var horizontalLine = document.createElement('hr');
    divContainer.appendChild(horizontalLine);



}

