'use strict'

let navPeaches = document.getElementById('peaches').addEventListener('click', handleClick);

function handleClick(e){
  
  hideAll();
  let targetid = e.target.id;
  
  switch(targetid) {
    case 'peaches':
      document.getElementById('peachesSurvey').removeAttribute('hidden');
      break;
    case 'cocolada':
      document.getElementById('cocoladaSurvey').removeAttribute('hidden');
      break;
    default:
      hideAll();
  }
  
}

function hideAll(){
  let hideatt = document.createAttribute('hidden');

  document.getElementById('peachesSurvey').setAttributeNode(hideatt);
  document.getElementById('cocoladaSurvey').setAttributeNode(hideatt);

}