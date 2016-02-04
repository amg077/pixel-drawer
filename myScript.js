$(document).ready(function(){  
							
  var marios = [
               {display: "Original", value: "originals"},
               {display: "Wario", value: "warios"},
               {display: "Luigi", value: "luigis"}];

  var linkks = [
			   {display: "Original", value: "originals"},
			   {display: "Zelda", value: "zeldas"},
			   {display: "Ganondorf", value: "ganondorfs"}];

  var pacmans = [
				 {display: "Original",value: "originals"},			////////////////////////////// S T O R E  O P T I O N S/////////////////////
				 {display: "Blinky",value: "blinkies"},
				 {display: "Pinky",value: "pinkies"}];
				
  var mirreyes = [
				  {display: "Original",value: "originals"},
				  {display: "black",value: "blacks"},
				  {display: "white",value: "whites"}];
				
  $("#character").change(function(){							
    var characters = $(this).val();
	
	switch(characters){
		case 'marios':
		  list(marios);
		break;
		case 'linkks':
		  list(linkks);
		break;	
		case 'pacmans':  											///////////////////////////D I S P L A Y  O P T I O N S /////////////////////	
		  list(pacmans);
		break;
		case 'mirreyes':
		  list(mirreyes);
		break;
		default:
		  $("#skin").html('');	
	}

	function list(array_list){
	  $("#skin").html("");
	  $(array_list).each(function (i) {
	  $("#skin").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
	  });	
	}
		$('.playanimation').click(function(){
  	  $('#canvas').addClass('trigger');								///////////////// R E L O A D S  A N I M A T I O N ///////////////////
        setTimeout(function(){
      $("#canvas").removeClass("trigger")},3000)
	});	
  });		
});
				
	function draw(){
					/////////////////////////////D E L E T E  D R A W I N G////////////////////////////////
	  var canvas = document.getElementById("canvas");
	  var ctx = canvas.getContext("2d");
	  ctx.clearRect(0,0,canvas.width,canvas.height);
						////////////////////S T O R E  S E L E C  T I O N ///////////////////////////
    var captureDrawing = document.getElementById("character").selectedIndex;
	  var captureSkin = document.getElementById("skin").selectedIndex; 
	  var drawing;
	  var smb=document.getElementById("smb");
	  var overworld=document.getElementById("Overworld");
	  var pacman=document.getElementById("pacmansong");	
	  var dreamers=document.getElementById("dreamers");
	  var stopmario=smb.pause();
	  var stopzelda=overworld.pause();			////// GETS MUSIC //////
	  var stopacman=pacman.pause();
	  var stopmirrey=dreamers.pause();
	 
						///////////////// L O A D  D R A W I N G S///////////////////////////////
	  var mario = [//2 3 4 5 6 7 8 9 10 11 12 13 14 15 16,17 
				  [0,0,0,0,0,1,1,1,1,1,1,0,0,5,5,5,0],//1
				  [0,0,0,0,1,1,1,1,1,1,1,1,1,1,5,5,0],//2
				  [0,0,0,0,3,3,3,5,5,5,6,5,0,1,1,1,0],//3
				  [0,0,0,3,5,3,5,5,5,5,6,5,5,5,1,1,0],//4
				  [0,0,0,3,5,3,3,5,5,5,5,6,5,5,5,1,0],//5
				  [0,0,0,3,3,5,5,5,5,5,6,6,6,6,1,0,0],//6
				  [0,0,0,0,0,5,5,5,5,5,5,5,5,1,1,0,0],//7
				  [0,0,1,1,1,1,1,2,1,1,1,2,1,1,0,0,3,],//8
				  [5,5,1,1,1,1,1,1,2,1,1,1,2,0,0,3,3],//9
				  [5,5,5,1,1,1,1,1,2,2,2,2,4,2,2,3,3],//10
				  [0,0,0,0,2,1,2,2,2,4,2,2,2,2,2,3,3],//11
				  [0,0,3,3,3,2,2,2,2,2,2,2,2,2,2,3,3,],//12
				  [0,3,3,3,2,2,2,2,2,2,2,0,0,0,0,0,0],//13
				  [0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//14
				  [0,3,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0]//15
				  ];
              
	  var pacman =[//2 3 4 5 6 7 8 9 10 11 12 13 1415 16 17 18 19 20
                  [0,0,0,0,0,0,0,0,0,6,6,6,6,0,0,0,0,0,0,0],//1
				  [0,0,0,0,0,0,6,6,6,4,4,4,4,6,6,6,0,0,0,0],//2
				  [0,0,0,0,6,6,4,4,4,4,4,4,4,4,4,4,6,6,0,0],//3
				  [0,0,0,6,4,4,4,4,4,4,6,6,6,4,4,4,4,4,6,0],//4
				  [0,0,6,4,4,4,4,4,4,4,6,6,6,4,4,4,4,4,4,6], //5
				  [0,0,6,4,4,4,4,4,4,4,6,6,6,4,4,4,4,6,6,6], //6
				  [0,6,4,4,4,4,4,4,4,4,4,4,4,4,4,6,6,0,0,0], //7
				  [0,6,4,4,4,4,4,4,4,4,4,4,4,6,6,0,0,0,0,0], //8
				  [0,6,4,4,4,4,4,4,4,4,4,6,6,0,0,0,0,0,0,0], //9
				  [6,4,4,4,4,4,4,4,4,6,6,0,0,0,0,0,0,0,0,0], //10
				  [6,4,4,4,4,4,4,6,6,0,0,0,0,0,0,0,0,0,0,0], //11
				  [6,4,4,4,4,4,4,6,6,0,0,0,0,0,0,0,0,0,0,0], //12
				  [6,4,4,4,4,4,4,4,4,6,6,0,0,0,0,0,0,0,0,0], //13
				  [0,6,4,4,4,4,4,4,4,4,4,6,6,0,0,0,0,0,0,0], //14
				  [0,6,4,4,4,4,4,4,4,4,4,4,4,6,6,0,0,0,0,0], //15
				  [0,6,4,4,4,4,4,4,4,4,4,4,4,4,4,6,6,0,0,0], //16
				  [0,0,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,6,6], //17
				  [0,0,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6], //18
				  [0,0,0,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,6,0], //19
			      [0,0,0,0,6,6,4,4,4,4,4,4,4,4,4,4,6,6,0,0], //20
				  [0,0,0,0,0,0,6,6,6,4,4,4,4,6,6,6,0,0,0,0], //21
				  [0,0,0,0,0,0,0,0,6,6,6,6,6,0,0,0,0,0,0,0] //22
				  ];				
						 						 
	  var linkk = [//2 3 4 5 6 7 8 9 10 11 12 13
				  [0,0,0,0,7,7,7,7,7,7,0,0,0],//1
				  [0,0,0,7,7,7,7,7,7,7,7,0,0],//2
				  [0,5,0,7,3,3,3,3,3,3,7,0,5],//3
				  [0,5,0,3,3,3,3,3,3,3,3,0,5],//4
				  [0,5,5,3,5,7,5,5,7,5,3,5,5],//5
				  [0,5,5,3,5,3,5,5,3,5,3,5,5],//6
				  [0,5,5,5,5,5,5,5,5,5,5,5,3],//7
				  [0,0,0,7,5,5,3,3,5,5,7,3,3],//8
				  [0,3,3,3,3,3,5,5,5,7,7,7,5],//9
				  [3,3,5,3,3,3,3,7,7,7,7,7,5],//10
				  [3,5,5,5,3,3,5,3,3,7,7,3,0],//11
				  [3,3,5,3,3,3,5,7,3,3,3,3,0],//12
				  [3,3,5,3,3,3,5,3,3,7,7,7,0],//13
				  [3,3,3,3,3,3,5,7,7,7,3,0,0],//14
				  [3,5,5,5,5,5,0,0,3,3,3,0,0],//15
				  [0,0,0,0,0,0,0,0,3,3,3,0,0]//16
				  ];
							
	  var mirrey = [//2 3 4 5 6 7 8 9 10 11 12 13
				   [0,0,0,0,0,0,0,6,0,0,0,0,0],//1
				   [0,0,0,6,6,6,6,6,6,6,0,0,0],//2
				   [0,0,6,6,6,6,6,6,6,6,6,6,0],//3
				   [0,6,6,6,6,6,6,6,6,6,6,6,0],//4
				   [0,8,8,8,8,8,6,8,8,8,8,8,0],//5
				   [0,8,8,8,8,8,8,8,8,8,8,8,0],//6
				   [0,8,6,6,6,8,8,8,6,6,6,8,0],//7
				   [0,6,6,6,6,6,6,6,6,6,6,6,0],//8
				   [0,8,6,6,6,8,8,8,6,6,6,8,0],//9
				   [0,8,8,8,8,8,8,8,8,8,8,8,0],//10
				   [0,8,8,8,8,8,8,8,8,8,8,8,0],//11
				   [0,8,8,8,8,1,1,1,8,8,8,8,0],//12
				   [0,8,8,8,8,8,8,8,8,8,8,8,0],//13
				   [0,0,0,0,8,8,8,8,8,0,0,0,0],//14
				   [9,5,9,5,8,8,8,8,8,5,9,5,9],//15
				   [9,5,9,5,9,8,8,8,9,5,9,5,9],//16
				   [9,5,9,5,9,5,5,8,9,5,9,5,9],//17
				   [9,5,9,5,9,5,9,5,9,5,9,5,9],//18
				   [9,5,9,5,9,5,9,5,9,5,9,5,9],//19
				   [9,5,9,5,9,5,9,5,9,5,9,5,9],//20
				   [8,8,5,5,5,5,5,5,5,5,5,8,8],//21
				   [0,0,10,10,10,10,10,10,10,10,10,0,0],//22
				   [0,0,10,10,10,10,10,10,10,10,10,0,0],//23
				   [0,0,0,10,10,0,0,0,10,10,0,0,0],//24
				   [0,0,0,10,10,0,0,0,10,10,0,0,0],//25
				   [0,0,0,10,10,0,0,0,10,10,0,0,0],
				   [0,0,0,10,10,0,0,0,10,10,0,0,0],
			       [0,0,0,6,6,0,0,0,6,6,0,0,0],//26
				   [0,0,6,6,6,0,0,0,6,6,6,0,0]//27
				   ];						
							////////////// R E P L A C E   S K I N  C O L O R S ////////									
	  if(captureDrawing==1){
	    drawing=mario;
	    smb.play();
		stopzelda, stopacman, stopmirrey;
		document.body.style.backgroundColor="#F1C232";
		for (y = 0; y <drawing.length; y++){		
		  for (x = 0; x <drawing[y].length; x++){
		    if(captureSkin==0){}//do nothing
			else if(captureSkin==1){//wario	
			  if(drawing[y][x]==1){
			    drawing[y][x]=4;
			  }	
			  if(drawing[y][x]==2){
				drawing[y][x]=9;
			  }															 
			}
			else{//luigi
			  if(drawing[y][x]==1){
                drawing[y][x]=11;
              }
			  if(drawing[y][x]==3 || drawing[y][x]==6){
				drawing[y][x]=7;
			  }
			}
      }
		}
	  }			
	  else if(captureDrawing==2){
	    drawing=linkk;
	    overworld.play();
		stopmario, stopacman, stopmirrey;
		document.body.style.backgroundColor="#A7893C";	
        for (y = 0; y <drawing.length; y++){
          for (x = 0; x <drawing[y].length; x++){
            if(drawing[y][x]==0){
              drawing[y][x]=12;
			}
		if(captureSkin==0){}//do nothing
	    else if(captureSkin==1){
		  if(drawing[y][x]==7){
		    drawing[y][x]=5;
          }
		}
		else{
		  if(drawing[y][x]==7){
		    drawing[y][x]=3;
		  }						
		}
          }
		    }
	  }									
		else{
		  if(captureDrawing==3){
		  	drawing=pacman;
		    var pacman=document.getElementById("pacmansong");
		    pacman.play();
			stopzelda, stopmario, stopmirrey;
			document.body.style.backgroundColor="#FFFF00";
			for (y = 0; y <drawing.length; y++){
			  for (x = 0; x <drawing[y].length; x++){
			    if(drawing[y][x]==0){
				  drawing[y][x]=13;
				}
		    if(captureSkin==0){}// do nothing
			else if(captureSkin==2){
			  if(drawing[y][x]==4){
			    drawing[y][x]=5;
			  }
			}
			else{
			  if(drawing[y][x]==4){
			    drawing[y][x]=1;
			  }			
		  }	
			  }
		  }
		}							
			else if(captureDrawing==4){
			  drawing=mirrey;
			  dreamers.play();
			  stopzelda, stopmario, stopacman;
			  document.body.style.backgroundColor="#FFC0CB";
			  for (y = 0; y <drawing.length; y++){
			    for (x = 0; x <drawing[y].length; x++){
				  if(drawing[y][x]==0){
				    drawing[y][x]=14;
				  }					
				 if(captureSkin==0){}//do nothing 
				  if(captureSkin==1){
				    if(drawing[y][x]==5 || drawing[y][x]==9){
					  drawing[y][x]=6;		
					}																		 
				  }
				  else if(captureSkin==2){
				    if(drawing[y][x]==5 || drawing[y][x]==9){
					  drawing[y][x]=11;		
					  }													 	
				  }
				 }		
	 			}
	 		}	
	 	 }
				
	 canvas.width = canvas.offsetWidth;
	 canvas.height = canvas.offsetHeight;
	 var pixelSize = Math.floor(Math.min(canvas.height/drawing.length),(canvas.width/drawing[0].length));
	 var updatex = drawing[0].length;
	 var updatey = drawing.length;
     var drawingWidth = pixelSize*updatex;
     var drawingHeight = pixelSize*updatey;
     var initialx = Math.floor((canvas.width-drawingWidth)/2); 
     var initialy = Math.floor((canvas.height-drawingHeight)/2);  
                 
      for (y = 0; y < drawing.length; y++){
        for(x = 0; x < drawing[y].length; x++){     
          switch (drawing[y][x]) {
            case 1:
              color = "red";    
            break;
            case 2:
              color = "blue";
            break;
            case 3:
              color = "brown"; 
            break;
            case 4:
              color = "yellow";
            break;  
            case 5:
              color = "pink";
            break;    
            case 0:
              color = "#F1C232";//mario maker color
            break;
            case 6:
              color = "black";
            break;
            case 7:
			        color = "green";
			      break;
			      case 8:
			        color = "#F1C232";//flesh color
		        break;	
            case 9:
              color = "#E430D8";//violet
            break;    
            case 10:  
			        color = "#60587C";//purple
			      break;
			      case 11:  
			        color = "white";
			      break;	
			    case 12:
			        color ="#A7893C";//link background
			    break;
			    case 13:
			        color ="#FFFF00";//pacman background
			    break;
			    case 14:
			        color ="#FFC0CB";//mirrey background
			    break;
			    default:
			      color = "#3F1E30";//almost black, mirrey jeans
          }           	
          ctx.fillStyle = color;   
          ctx.fillRect(
            Math.floor(initialx+(pixelSize*x)), 
            Math.floor(initialy + (y * pixelSize)), 
                       pixelSize, 
                       pixelSize
            );
       } 
     }  
   } 
		
