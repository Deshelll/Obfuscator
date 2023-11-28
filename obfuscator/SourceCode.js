window.onload = function(){
    let result = {};
    let step = 0; 

    function showQuestion (questionNumber){
        document.querySelector(".question").innerHTML = quiz[step]['quest'];
        let answer = '';
        for(let key in quiz[step]['answ']){
            answer += `<li data-v="${key}" class="answer-variant">${quiz[step]['answ'][key]}<li/>`
        }
        document.querySelector(".answer").innerHTML = answer;//gdgddgdgd
    }

    document.onclick = function (event){
        event.stopPropagation();//gdgdgdg
        if(event.target.classList.contains('answer-variant') && step < quiz.length){
            console.log(event.target);
            if(result[event.target.dataset.v] != undefined){//выбор ответа (атрибута)
                result[event.target.dataset.v]++;
            }else{
                result[event.target.dataset.v] = 0;
            }
            step++;
            if(step == quiz.length){
                document.querySelector('.question').remove(); //удаление 
                document.querySelector('.answer').remove();//dgdgdgd
                showResult();
            }else{
                showQuestion(step);
            }
        }
        console.log(result);//gdgdgdggd
    }

    function showResult(){
        let key = Object.keys(result).reduce(function(a,b){//ищет ключ с максимальным значением при помощи reduce
            return result[a] > result[b] ? a : b; //возращает значение
        });
        console.log(key);

        let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = answers[key]['description'];
        document.querySelector('main').appendChild(div);
    }

    showQuestion(step);
}
/*
        let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = answers[key]['description'];
        document.querySelector('main').appendChild(div);
    }

    showQuestion(step);
}*/

