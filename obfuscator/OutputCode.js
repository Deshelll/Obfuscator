window.onload =function(){let hTeIDEvx ={};let gOZxrvEN =0;function showQuestion (questionNumber){document.querySelector(".question").innerHTML =quiz[gOZxrvEN]['quest'];let DnmMmHEc ='';for(let OOAMhuaH in quiz[gOZxrvEN]['answ']){DnmMmHEc +=`<li data-v="${OOAMhuaH}"class="DnmMmHEc-variant">${quiz[gOZxrvEN]['answ'][OOAMhuaH]}<li/>`};document.querySelector(".DnmMmHEc").innerHTML =DnmMmHEc;};document.onclick =function (event){event.stopPropagation();if(event.target.classList.contains('DnmMmHEc-variant')&&gOZxrvEN <quiz.length){console.log(event.target);if(hTeIDEvx[event.target.dataset.v]!=undefined){hTeIDEvx[event.target.dataset.v]++;}else{hTeIDEvx[event.target.dataset.v]=0;};gOZxrvEN++;if(gOZxrvEN ==quiz.length){document.querySelector('.question').remove();document.querySelector('.DnmMmHEc').remove();showResult();}else{showQuestion(gOZxrvEN);}};console.log(hTeIDEvx);};function showResult(){let OOAMhuaH =Object.keys(hTeIDEvx).reduce(function(a,b){return hTeIDEvx[a]>hTeIDEvx[b]?a :b;});console.log(OOAMhuaH);let QmYMhpfz =document.createElement('QmYMhpfz');QmYMhpfz.classList.add('hTeIDEvx');QmYMhpfz.innerHTML =answers[OOAMhuaH]['description'];document.querySelector('main').appendChild(QmYMhpfz);};showQuestion(gOZxrvEN);};const DLgMEaWK =0;const mEEsZsiH ="src/Test.js";const UHdaOhuu =0;