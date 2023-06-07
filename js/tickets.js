// FAQ 開合

const question = document.querySelectorAll('.faq_item');

question.forEach(function (question) { //選擇每一個.question
    const btn = question.querySelector('.switch_btn'); //抓加減icon

    btn.addEventListener('click', function () {

        question.classList.toggle('show_answer');

        question.forEach(function(item){

            if (item !== question){

                item.classList.remove('show_answer');
            }
        });

    });
});