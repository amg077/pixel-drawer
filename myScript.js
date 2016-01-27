function borraDibujo(){
				var canvas= document.getElementById("canvas");
                var ctx = canvas.getContext("2d");
				ctx.clearRect(0,0,canvas.width,canvas.height);
			}
			
				$(document).ready(function(){			
							
					var marios =[
								{display: "Original", value: "originales"},
								{display: "Wario", value: "warios"},
								{display: "Luigi", value: "luigis"}
					];

					var linkks = [
								{display: "Original", value: "originales"},
								{display: "Zelda", value: "zeldas"},
								{display: "Ganondorf", value: "ganondorfs"}
					];

					var pacmans =[
								{display: "Original",value: "originales"},
								{display: "Blinky",value: "blinkies"},
								{display: "Pinky",value: "pinkies"}	
					];
				
					var mirreyes = [
								{display: "Original",value: "originales"},
								{display: "negro",value: "negros"},
								{display: "blanco",value: "blancos"}	
					];
				
					$("#personaje").change(function(){
					var personajes = $(this).val();
	
					switch(personajes){
		
					case 'marios':
					list(marios);
					break;
	 			
					case 'linkks':
					list(linkks);
					break;	
	
					case 'pacmans':
					list(pacmans);
					break;
				
					case 'mirreyes':
					list(mirreyes);
					break;
	
					default:
					$("#skin").html('');
					break;	
					}


				
				});	
				
					function list(array_list){
	
						$("#skin").html("");
						$(array_list).each(function (i) {
						$("#skin").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>");
						});	
					}	
				});
				
					function detectaDibujo(){// Esta es la funcion que guarda el valor dependiendo del dibujo que selecciones
						
						capturaDibujo = document.getElementById("personaje").selectedIndex;
						capturaSkin   = document.getElementById("skin").selectedIndex;            
					}
					
					
        
					function guardaDibujo(){
							var drawing;
				
							document.getElementById("anchos").innerHTML= canvas.width;
							document.getElementById("largos").innerHTML= canvas.height;
			
              
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
										[0,0,0,0,0,0,0,0,3,3,3,0,0],//16
										];
							
							var mirrey=[//2 3 4 5 6 7 8 9 10 11 12 13
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
        
							if(window.capturaDibujo==1){
								drawing=mario;
								
								if(window.capturaSkin==0){
									drawing=mario;	
								}
								
									else if(window.capturaSkin==1){
										
										for (y = 0; y <drawing.length; y++){
											
											for (x = 0; x <drawing[y].length; x++){
												
												if(drawing[y][x]==1){
													drawing[y][x]=4;
												}
								
												if(drawing[y][x]==2){
												drawing[y][x]=9;
												}		
											}
										} 
									}
									
								else{
									for (y=0; y<drawing.length; y++){//luigi
										
										for (x=0; x<drawing[y].length; x++){
											
											if(drawing[y][x]==1){
												drawing[y][x]=11;
											}
								
											if(drawing[y][x]==3){
												drawing[y][x]=7;
											}
								
											if(drawing[y][x]==6){
												drawing[y][x]=7;
											}
										}		
									}
							}
						}
						
									else if(window.capturaDibujo==2){
										drawing=linkk;	
										for (y = 0; y <drawing.length; y++){
											for (x = 0; x <drawing[y].length; x++){
												if(drawing[y][x]==0){
													drawing[y][x]=12;
												}
											}
										}
										
										if(window.capturaSkin==0){
											drawing=linkk;	
										}
									else if(window.capturaSkin==1){
										for (y = 0; y <drawing.length; y++){
											for (x = 0; x <drawing[y].length; x++){
												if(drawing[y][x]==7){
													drawing[y][x]=5;
												}
											}
										} 
									}
									else{
										for (y = 0; y <drawing.length; y++){
											for (x = 0; x <drawing[y].length; x++){
												if(drawing[y][x]==7){
													drawing[y][x]=3;
												}
											}
										}	
									}
								}
									else{
										if(window.capturaDibujo==3){
											drawing=pacman;	
											for (y = 0; y <drawing.length; y++){
												for (x = 0; x <drawing[y].length; x++){
													if(drawing[y][x]==0){
													drawing[y][x]=13;
													}
												}
											}
											
											
											if(window.capturaSkin==0){
												drawing=pacman;	
											}
										else if(window.capturaSkin==2){
											for (y = 0; y <drawing.length; y++){
												for (x = 0; x <drawing[y].length; x++){
													if(drawing[y][x]==4){
													drawing[y][x]=5;
													}

												}
											} 
										}

										else{
											for (y = 0; y <drawing.length; y++){
												for (x = 0; x <drawing[y].length; x++){
														if(drawing[y][x]==4){
															drawing[y][x]=1;
														}
												}
											}
										}	
									}
									
						else if(window.capturaDibujo==4){
							drawing=mirrey;
							for (y = 0; y <drawing.length; y++){
								for (x = 0; x <drawing[y].length; x++){
									if(drawing[y][x]==0){
										drawing[y][x]=14;
												}
									}
								}	
										
								if(window.capturaSkin==0){
									drawing=mirrey;   
								}	
								if(window.capturaSkin==1){
										for (y = 0; y <drawing.length; y++){
											for (x = 0; x <drawing[y].length; x++){
												if(drawing[y][x]==5){
													drawing[y][x]=6;		
											}	
												if(drawing[y][x]==9){
													drawing[y][x]=6;		
												}								
											}
										} 
								}
								else if(window.capturaSkin==2){
									for (y = 0; y <drawing.length; y++){
										for (x = 0; x <drawing[y].length; x++){
											if(drawing[y][x]==5){
												drawing[y][x]=11;		
											}
										
											if(drawing[y][x]==9){
												drawing[y][x]=11;		
											}		
										}
									} 	
								}
						}		
	 }
			
						canvas= document.getElementById("canvas");
						ctx = canvas.getContext("2d");  
						pixelSizeX=Math.floor(canvas.height/drawing.length);
						pixelSizeY=Math.floor(canvas.height/drawing.length);
						
					
						/*canvas= document.getElementById("canvas");
						ctx = canvas.getContext("2d");  
						pixelSizeX=Math.floor((window.innerHeight/window.innerWidth))*.3;
						pixelSizeY=Math.floor((window.innerHeight/window.innerWidth))*.3;*/
						
						
					 	if(window.innerWidth<window.innerHeight){
						canvas.width =canvas.height;
						}   
						
						
              
              
              
						for (y = 0; y < drawing.length; y++){
							for(x = 0; x < drawing[y].length; x++){  
								actualizacion=0;
							}
							actualizacion+=drawing[y].length;
						}
						
                       anchoDibujo = pixelSizeX*actualizacion;
                       diferencia =Math.floor((canvas.width-anchoDibujo)/2);   
                       
                      
              
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
                                color = "#F1C232";//antes blanco, ahora color mario maker
                            break;
                            case 6:
                                color = "black";
                            break;
                            case 7:
								color= "green";
							break;
							case 8:
								color= "#F1C232";//carne
							break;	
                            case 9:
                                color = "#E430D8";//violeta
                            break;    
                            case 10:  
								color = "#60587C";//moradillo
							break;

							case 11:  
								color = "white";//blanco
							break;	
							
							case 12:
								color ="#A7893C";//fondo link
								break;
							case 13:
								color="#FFFF00";//fondo pacman
								break;
							case 14:
								color="#FFC0CB";// fondo mirrey
								break;
							default:
								color = "#3F1E30";//casi negro
                        }
                      	
                  ctx.fillStyle = color;   
  
                  ctx.fillRect(
                            diferencia+(pixelSizeX*x), 
                            y * pixelSizeY, 
                            pixelSizeX, 
                            pixelSizeY
                        );
                        
                    }
                    
                }
                 
			} 
			
		function recarga(){
					window.addEventListener("resize", resizeCanvas);
				}
			
			
				function resizeCanvas(){
						borraDibujo();
						detectaDibujo();
						redibujaCanvas();
						
					}
				
				function reproduceMusica(){
					var smb=document.getElementById("smb");
					var overworld=document.getElementById("Overworld");
					var pacman=document.getElementById("pacmansong");
					var dreamers=document.getElementById("dreamers");
					
					
					var detenmario=smb.pause();
					var detenzelda=overworld.pause();
					var detenpacman=pacman.pause();
					var detenmirrey=dreamers.pause();
					
					if (capturaDibujo==1){
						smb.play();
						detenzelda, detenpacman, detenmirrey;
						document.body.style.backgroundColor="#F1C232";
						
					}
					else if(capturaDibujo==2){
						overworld.play();
						detenmario, detenpacman, detenmirrey;
						document.body.style.backgroundColor="#A7893C";
					}
					
					else if(capturaDibujo==3){
						pacman.play();
						detenzelda, detenmario, detenmirrey;
						document.body.style.backgroundColor="#FFFF00";
					}
					
					else{
					dreamers.play();
						detenzelda, detenmario, detenpacman;
						document.body.style.backgroundColor="#FFC0CB";
					}
				
			
				}



$(document).ready(function(){
$('.playanimation').click(function(){
    
  $('#canvas').addClass('trigger');
    setTimeout(function(){
    $("#canvas").removeClass("trigger")},3000)
    
});
});

function redibujaCanvas(){
	
		
					  
						var drawing;
						
								canvas.width=canvas.height*2;
			
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
										[0,0,0,0,0,0,0,0,3,3,3,0,0],//16
										];
							
							var mirrey=[//2 3 4 5 6 7 8 9 10 11 12 13
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
        
							if(window.capturaDibujo==1){
								drawing=mario;
								
								if(window.capturaSkin==0){
									drawing=mario;	
								}
								
									else if(window.capturaSkin==1){
										
										for (y = 0; y <drawing.length; y++){
											
											for (x = 0; x <drawing[y].length; x++){
												
												if(drawing[y][x]==1){
													drawing[y][x]=4;
												}
								
												if(drawing[y][x]==2){
												drawing[y][x]=9;
												}		
											}
										} 
									}
									
								else{
									for (y=0; y<drawing.length; y++){//luigi
										
										for (x=0; x<drawing[y].length; x++){
											
											if(drawing[y][x]==1){
												drawing[y][x]=11;
											}
								
											if(drawing[y][x]==3){
												drawing[y][x]=7;
											}
								
											if(drawing[y][x]==6){
												drawing[y][x]=7;
											}
										}		
									}
							}
						}
						
									else if(window.capturaDibujo==2){
										drawing=linkk;	
										for (y = 0; y <drawing.length; y++){
											for (x = 0; x <drawing[y].length; x++){
												if(drawing[y][x]==0){
													drawing[y][x]=12;
												}
											}
										}
										
										if(window.capturaSkin==0){
											drawing=linkk;	
										}
									else if(window.capturaSkin==1){
										for (y = 0; y <drawing.length; y++){
											for (x = 0; x <drawing[y].length; x++){
												if(drawing[y][x]==7){
													drawing[y][x]=5;
												}
											}
										} 
									}
									else{
										for (y = 0; y <drawing.length; y++){
											for (x = 0; x <drawing[y].length; x++){
												if(drawing[y][x]==7){
													drawing[y][x]=3;
												}
											}
										}	
									}
								}
									else{
										if(window.capturaDibujo==3){
											drawing=pacman;	
											for (y = 0; y <drawing.length; y++){
												for (x = 0; x <drawing[y].length; x++){
													if(drawing[y][x]==0){
													drawing[y][x]=13;
													}
												}
											}
											
											
											if(window.capturaSkin==0){
												drawing=pacman;	
											}
										else if(window.capturaSkin==2){
											for (y = 0; y <drawing.length; y++){
												for (x = 0; x <drawing[y].length; x++){
													if(drawing[y][x]==4){
													drawing[y][x]=5;
													}

												}
											} 
										}

										else{
											for (y = 0; y <drawing.length; y++){
												for (x = 0; x <drawing[y].length; x++){
														if(drawing[y][x]==4){
															drawing[y][x]=1;
														}
												}
											}
										}	
									}
									
						else if(window.capturaDibujo==4){
							drawing=mirrey;
							for (y = 0; y <drawing.length; y++){
								for (x = 0; x <drawing[y].length; x++){
									if(drawing[y][x]==0){
										drawing[y][x]=14;
												}
									}
								}	
										
								if(window.capturaSkin==0){
									drawing=mirrey;   
								}	
								if(window.capturaSkin==1){
										for (y = 0; y <drawing.length; y++){
											for (x = 0; x <drawing[y].length; x++){
												if(drawing[y][x]==5){
													drawing[y][x]=6;		
											}	
												if(drawing[y][x]==9){
													drawing[y][x]=6;		
												}								
											}
										} 
								}
								else if(window.capturaSkin==2){
									for (y = 0; y <drawing.length; y++){
										for (x = 0; x <drawing[y].length; x++){
											if(drawing[y][x]==5){
												drawing[y][x]=11;		
											}
										
											if(drawing[y][x]==9){
												drawing[y][x]=11;		
											}		
										}
									} 	
								}
						}
						
								
	 }
			
						canvas= document.getElementById("canvas");
						ctx = canvas.getContext("2d");  
						pixelSizeX=Math.floor(canvas.height/drawing.length);
						pixelSizeY=Math.floor(canvas.height/drawing.length);
						
	
						for (y = 0; y < drawing.length; y++){
							for(x = 0; x < drawing[y].length; x++){  
								actualizacion=0;
							}
							actualizacion+=drawing[y].length;
						}
						
                       anchoDibujo = pixelSizeX*actualizacion;
                       diferencia =Math.floor((canvas.width-anchoDibujo)/2);   
                       
                      
              
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
                                color = "#F1C232";//antes blanco, ahora color mario maker
                            break;
                            case 6:
                                color = "black";
                            break;
                            case 7:
								color= "green";
							break;
							case 8:
								color= "#F1C232";//carne
							break;	
                            case 9:
                                color = "#E430D8";//violeta
                            break;    
                            case 10:  
								color = "#60587C";//moradillo
							break;

							case 11:  
								color = "white";//blanco
							break;	
							
							case 12:
								color ="#A7893C";//fondo link
								break;
							case 13:
								color="#FFFF00";//fondo pacman
								break;
							case 14:
								color="#FFC0CB";// fondo mirrey
								break;
							default:
								color = "#3F1E30";//casi negro
                        }
                      	
                  ctx.fillStyle = color;   
  
                  ctx.fillRect(
                            diferencia+(pixelSizeX*x), 
                            y * pixelSizeY, 
                            pixelSizeX, 
                            pixelSizeY
                        );
                        
                    }
                    
                }
					
				}
				
			



				
				
