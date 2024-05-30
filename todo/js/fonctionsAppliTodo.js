	/**
	 *
	 * Author:
	 * Date: 26.01.2022
	 *
	 * Cible: CORAN/todo/douanFrequents.html(2ème page de l'appli todo)
	 * Applications: compte les tasbih( décremente de 33 à 1) 
	 *	             gere le style d'affichage( animation bouton click)
	 *	 
	 */	
		
	function trentetrois(count, action, resultat){
		action.onclick=function(){
			count--;
			if( count >= 1 ){
				resultat.innerHTML=count;
				action.innerHTML="encore";
				/*
				action.style.background="radial-gradient(ellipse at top, #e66465, transparent), radial-gradient(ellipse at bottom, #4d9f0c, transparent)";
				action.style.color="#3d3d5c";
				*/				
				action.classList.add("countBtn");
			}else{
				action.classList.remove("countBtn");	
				resultat.innerHTML=" OK! &emsp; 33";
				action.innerHTML="ici";
				/* inutile( à supprimer) */	
				action.style.background = "#eee"; 
				action.style.color = "#aaa";
			}			
		};
	}
	/**
	 *
	 * Author:
	 * Date: 26.01.2022
	 *
	 * Cible: CORAN/todo/frequence4.html et  CORAN/todo/cahierBleu4.html
	 * Application: Un grand compeur qui affiche des information au fur et masure 	
	 * 
	 */
	
	function doubleboucle(){
		action.onclick=function(){
			count++;
			action.innerHTML="count";
			actionLp.innerHTML= count;
			
	
			if( count == 11  ){ actionLp.innerHTML= "&#128587;"; action.innerHTML=11;  }
			if( count == 12  ){ actionLp.innerHTML= "Loop &#10227;"; action.innerHTML=12;  }
			if( count == 13  ){ actionLp.innerHTML= "2ème &#10227;"; action.innerHTML=13;  }
			
			if( count == 22  ){ actionLp.innerHTML= "&#128587;"; action.innerHTML=22;  }
			if( count == 23  ){ actionLp.innerHTML= "Loop &#10227;"; action.innerHTML=23;  }
			if( count == 24  ){ actionLp.innerHTML= "3ème &#10227;"; action.innerHTML=24;  }
			
			if( count == 33  ){ actionLp.innerHTML= "&#128587;"; action.innerHTML=33;  }
			if( count == 34  ){ actionLp.innerHTML= "Loop &#10227;"; action.innerHTML=34;  }
			if( count == 35  ){ actionLp.innerHTML= "4ème &#10227;"; action.innerHTML=35;  }
			
			if( count == 44  ){ actionLp.innerHTML= "&#128587;"; action.innerHTML=44;  }
			if( count == 45  ){ actionLp.innerHTML= "Loop &#10227;"; action.innerHTML=45;  }
			if( count == 46  ){ actionLp.innerHTML= "5ème &#10227;"; action.innerHTML=46;  }
			
			if( count == 55  ){ actionLp.innerHTML= "&#128587;"; action.innerHTML=55; }	
			if( count == 56  ){ actionLp.innerHTML= "Loop &#10227;"; action.innerHTML=56;  }
			if( count == 57  ){ actionLp.innerHTML= "6ème &#10227;"; action.innerHTML=57;  }
			
			if( count == 66  ){ actionLp.innerHTML= "&#128587;"; action.innerHTML=66; }	
			if( count == 67  ){ actionLp.innerHTML= "Loop &#10227;"; action.innerHTML=67;  }
			if( count == 68  ){ actionLp.innerHTML= "7ème &#10227;"; action.innerHTML=68;  }
			
			if( count == 77  ){ actionLp.innerHTML= "&#128587;"; action.innerHTML=77; }
			if( count == 78  ){ actionLp.innerHTML= "Loop &#10227;"; action.innerHTML=78;  }
			if( count == 79  ){ actionLp.innerHTML= "8ème &#10227;"; action.innerHTML=79;  }
			
			if( count == 88  ){ actionLp.innerHTML= "&#128587;"; action.innerHTML=88; }	
			if( count == 87  ){ actionLp.innerHTML= "Loop &#10227;"; action.innerHTML=87;  }
			if( count == 88  ){ actionLp.innerHTML= "9ème &#10227;"; action.innerHTML=88;  }
			
			if( count == 99  ){ actionLp.innerHTML= "&#128587;"; action.innerHTML=99; }
				
		};
	}
	/** Commentaire en forme de smart phone */
	var countPhone=0;
	var actionPhone = document.getElementById("btnComment");		
	function phoneComment(){
		actionPhone.onclick=function(){
			countPhone++;
			if( countPhone <28  ){
			  actionPhone.innerHTML="&emsp;&emsp;&emsp;"+countPhone+"&emsp;&nbsp;&nbsp;&nbsp;"; 
			  if( countPhone == 27  ){actionPhone.innerHTML="&emsp;&emsp;&nbsp;&#128587;&emsp;"+countPhone+"&emsp;"; }	
			}		
		};
	}
	
	/** Comments functions */
	
	function commentaire1() {
	  var popup1 = document.getElementById("myPopup1");
	  popup1.classList.toggle("show");
	}
	function commentaire2() {
	  var popup2 = document.getElementById("myPopup2");
	  popup2.classList.toggle("show");
	}

	function commentaire3() {
	  var popup3 = document.getElementById("myPopup3");
	  popup3.classList.toggle("show");
	}
	function commentaire4() {
	  var popup4 = document.getElementById("myPopup4");
	  popup4.classList.toggle("show");
	}