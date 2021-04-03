
let inputVal = document.querySelector('.inpNum');
let btn = document.querySelector('.btn');
let formEarnings = document.querySelector('#formEarnings');
let listTbody = document.querySelector('.listTbody');
let listAccordion = document.querySelector('.accordion');
let blocksFirst = document.querySelector('.blocks-first');

formEarnings.addEventListener('submit', (e)=>{
    e.preventDefault();
});

let arr = [
    {
        forwhat: 'На себя',
        percent: 10,
        disc: `Self-development. Саморазвитие, хобби, увлечения`,
        h2ID: 'One'
    },
    {
        forwhat: 'На будущее',
        percent: 10,
        disc: `A reserve for attracting even more money, which should not be touched at all. Запас для привлечение еще большего количества денег, которое вообще нельзя трогать.`,
        h2ID: 'Two'
    },
    {
        forwhat: 'Родителям',
        percent: 10,
        disc: `For Parents every month. Родителям каждый месяц.`,
        h2ID: 'Three'
    },
    {
        forwhat: 'Благотворительность',
        percent: 2.5,
        disc: `Donate from a pure heart to those in need. Пожертвовать от чистого сердца нуждающимся.`,
        h2ID: 'Four'
    },
    {
        forwhat: 'Капитал',
        percent: 29.7,
        disc: `Деньги, которые нужно инвестировать, сохранить и приумножить или использовать на бизнес в будущем. Money that needs to be invested, saved and increased or used for business in the future.`,
        h2ID: 'Five'
    },
    {
        forwhat: 'Мечта',
        percent: 7.425,
        disc: `Savings for a dream. You can't touch it until it accumulates. Накопления на мечту. Трогать нельзя пока не накопится.`,
        h2ID: 'Six'
    },
    {
        forwhat: 'Жить',
        percent: 30.375,
        disc: `Everyday needs. Повседневные нужды. Комм.услуги, Интернет, Продукты, Телефон, Одежда, Транспорт, Дети, Гаджеты, Электроника`,
        h2ID: 'Seven'
    },
];

btn.addEventListener('click', ()=> {
    listTbody.innerHTML = '';     
    
    arr.forEach((item, index) => {

        listTbody.innerHTML += (`
            <tr>
                <th scope="row">${index+1}</th>
                <td>${item.forwhat}</td>
                <td>${item.percent}%</td>
                <td>${inputVal.value / 100 * item.percent}сом</td>
            </tr>
        `);

        document.querySelector('.income').innerHTML = `${inputVal.value} сом`;
        document.querySelector('.numOf-1').innerHTML = `${inputVal.value / 100 * 10} сом`;
        document.querySelector('.numOf-2').innerHTML = `${inputVal.value / 100 * 10} сом`;
        document.querySelector('.numOf-3').innerHTML = `${inputVal.value / 100 * 10} сом`;
        document.querySelector('.numOf-4').innerHTML = `${inputVal.value / 100 * 2.5} сом`;
        document.querySelector('.numOf-rest').innerHTML = `${inputVal.value / 100 * 67.5} сом`;
        document.querySelector('.numOf-5').innerHTML = `${inputVal.value / 100 * 37.125} сом`;
        document.querySelector('.numOf-6').innerHTML = `${inputVal.value / 100 * 29.7} сом`;
        document.querySelector('.numOf-7').innerHTML = `${inputVal.value / 100 * 30.375} сом`;
        document.querySelector('.numOf-8').innerHTML = `${inputVal.value / 100 * 7.425} сом`;

    })
});

window.onload = function () {

    arr.forEach((item, index) => {
        listAccordion.innerHTML += (`        
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-heading${item.h2ID}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${item.h2ID}" aria-expanded="false" aria-controls="flush-collapse${item.h2ID}">
                        ${index+1}. ${item.forwhat}
                    </button>
                </h2>
                <div id="flush-collapse${item.h2ID}" class="accordion-collapse collapse" aria-labelledby="flush-heading${item.h2ID}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">${item.disc}</div>
                </div>
            </div>
        `);
    });
    
}







