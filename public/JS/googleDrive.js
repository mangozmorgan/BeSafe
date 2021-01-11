
window.___gcfg = {
    parsetags: 'explicit'
  };
  function getFileInfo(){
    let name = document.getElementById('uploadFichierInput').files[0].name;
    let size = document.getElementById('uploadFichierInput').files[0].size;
    let type = document.getElementById('uploadFichierInput').files[0].type;

    
    let titleInput= document.getElementById("titleFile")
    titleInput.innerHTML=name

        function renderSaveToDrive() {
          gapi.savetodrive.render('savetodrive-div', {
            src: '/20181211_175247.jpg',
            filename: "CRYPT"+name  ,
            sitename: 'BeSafe'
          });
        }
        document.getElementById('render-link').addEventListener('click', renderSaveToDrive);
  }  


  function getFileInfo2(){
    let name = document.getElementById('uploadFichierInput2').files[0].name;
    let size = document.getElementById('uploadFichierInput2').files[0].size;
    let type = document.getElementById('uploadFichierInput2').files[0].type;

    
    let titleInput= document.getElementById("titleFile2")
    titleInput.innerHTML=name

        
       
  }  

