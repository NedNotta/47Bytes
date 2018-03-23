function closeAll(){
  document.getElementById("Menu").style.display = 'none';
  document.getElementById("homeBUTTON").className='';
  document.getElementById("DifferencesInSpelling").style.display ='none';
  document.getElementById("disBUTTON").className='';
  document.getElementById("AorN").style.display = "none";
  document.getElementById("AorNBUTTON").className='';
  document.getElementById("CCW").style.display = 'none';
  document.getElementById("CCWBUTTON").className='';
}
function showMenu(){
  closeAll();
  document.getElementById("Menu").style.display = 'block';
  document.getElementById("homeBUTTON").className = 'active';
}
function showDIS(){
  closeAll();
  document.getElementById("DifferencesInSpelling").style.display = 'block';
  document.getElementById("disBUTTON").className = 'active';
}
function showAORN(){
  closeAll();
  document.getElementById("AorN").style.display = 'block';
  document.getElementById("AorNBUTTON").className = 'active';
}
function showCCW(){
  closeAll();
  document.getElementById("CCW").style.display = 'block';
  document.getElementById("CCWBUTTON").className = 'active';
}
