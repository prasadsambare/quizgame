let  data =  ["Q.What is the capital city of Australia?","Q.Which year did World War II end?",
    "Q.Which planet is known as the Red Planet?","Q.What does HTTP stand for in web addresses?",
    "Q.Who played the character of Iron Man in the Marvel Cinematic Universe?"
    ,"Q.What is 3*5%3?","Q.Which social media platform has the most active users as of 2024?","Instagram Stories",
     "Q.Which social media app is known for its 6-second video clips?","Q.Which of the following is a feature unique to Snapchat?",
      "Q.What does the term hashtag originally refer to?","Q.What was the original name of Twitter before it became Twitter?",
       "Q.Which of the following social media platforms is primarily designed for professional networking?",
       "Q.Which social media platform is known for its photo-sharing features and filters?",
        "Q.What does the term “influencer” mean in social media context?",
        "Q.Which feature was introduced by Instagram in 2016 that mimics Snapchats Stories?"]; 
      
  let input = document.querySelector("#question"); 
  let op1 =  document.querySelector("#op1"); 
  let op2 = document.querySelector("#op2"); 
  let op3 = document.querySelector("#op3");
  let op4 = document.querySelector("#op4");
  let  start = document.querySelector("#next");   
  let count= 0; 
  let final; 
  let total; 
  let n1 ; 
  let n2;
  let n3;
  let n4;
  start.addEventListener("click",function(){   
      op1.classList.remove("clicked");
      op1.classList.remove("wrong");
      op2.classList.remove("clicked1"); 
      op2.classList.remove("wrong1");
      op3.classList.remove("clicked2"); 
      op3.classList.remove("wrong2");
      op4.classList.remove("clicked3"); 
      op4.classList.remove("wrong3");
    
      let i = parseInt(Math.random()*20); 
      let question = data[i]; 
      let  rank  = ["option0","option1","option2","option3","option4","option5","option6","option7","option8",
                    "option9","option10","option11","option12","option13","option14","option15","option16","option17",
                    "option18","option19","option20"]; 
      input.innerText = data[i]; 
      
      let  positions = (rank[i]); 
      let pos1 = ["Ans0","Ans1","Ans2","Ans3","Ans4","Ans5","Ans6","Ans7","Ans8","Ans9","Ans10","Ans11","Ans12",
                  "Ans13","Ans14","Ans15","Ans16","Ans17","Ans18","Ans19","Ans20"];
      let Ans= pos1[i]; 

      function number( positions){  
          let options = {
           option0 :["Sydney","rajugndi","Canberra","Brisbane"], 
           option1:  ["1942","1945","1948","1950"], 
           option2 :  ["Mars","Jupiter","Venus","Saturn"],
           option3 :  ["Hyper Text Transfer Protocol","Hyper Text Transfer Protocol","Hyper Text Translation Protocol","High Transfer Text Protocol"],
           option4 :  [" George Orwell","Aldous Huxley","J.D. Salinger"," F. Scott Fitzgerald"],
           option5 :  ["30","45","0","60"],
           option6 :  ["Instagram","Facebook","TikTok","Twitter"], 
           option7 :  ["2004","2005","2007","2003"],
           option8 :  ["Snapchat","TikTok","Instagram","Vine"],
           option9 :  ["Stories","Reels","Filters","Disappearing messages"],
           option10 : ["A trending topic on Twitter","A marketing strategy","A type of advertisement on social media","A keyword symbol used to categorize content"],
           option11:  ["Twittr","Chirp","Socialize","Tweetie"],
           option12:  ["Facebook","LinkedIn","Pinterest","TikTok"],
           option13:  ["Facebook","Instagram","Twitter","Snapchat"],
           option14:  [" A person who shares funny memes","A person with the power to affect the purchasing decisions of others","A person who manages social media accounts for others"," A person who posts news updates regularly"],
           option15:  ["Highlights"," Instagram Stories","Reels","Live"],
           option16:  ["30","45","0","60"],
           option17:  ["30","45","0","60"],
           option18:  ["30","45","0","60"],
           option19:  ["30","45","0","60"],
           option20 :  ["30","45","0","60"]

          }; 
        
         

          if(options[positions]){   
       n1=  op1.innerText =  options[positions][0]; 
      n2  = op2.innerText =  options[positions][1]; 
     n3 =  op3.innerText = options[positions][2]; 
     n4=  op4.innerText =  options[positions][3]; 
          }
        }  
      number(positions);  

     
      function dataans(Ans){ 
             
        let  answers = { 
            Ans0 :["Sydney"],
            Ans1 :["1945"],
            Ans2 :["Venus"],
           Ans3 :["Hyper Text Transfer Protocol"],
           Ans4: ["J.D. Salinger"],
           Ans5:["0"],
           Ans6:["Facebook"],
           Ans7:["2004"],
           Ans8:["Vine"],
           Ans9:["Disappearing messages"],
           Ans10:["A keyword symbol used to categorize content"],
           Ans11:["Twittr"],
           Ans12:["LinkedIn"],
           Ans13:["Instagram"],
           Ans14:["Instagram Stories "],
           Ans15:["0"],
           Ans16:["0"],
           Ans17:["0"],
           Ans18:["0"],
           Ans19:["0"],
           Ans20:["0"]
      }  
      if(answers[Ans]){ 
        final = answers[Ans]; 
        console.log(final);
    }   
}
    dataans(Ans); 
    
  }) 
   

   
    op1.addEventListener("click",()=>{  
        let user = n1;
      if(final== user){
        op1.classList.toggle("clicked");  
      }  
      
    else{
        op1.classList.toggle("wrong");
    }
       
  })    
  
  op2.addEventListener("click",()=>{  
    let user = n2;
    if(final== user){
        op2.classList.toggle("clicked1");
      }  
      
    else{
        op2.classList.toggle("wrong1");
    }

  })
  
  op3.addEventListener("click",()=>{ 
    let user = n3; 
    if(user ==final) {
        op3.classList.toggle("clicked2")
    }
      else{
        op3.classList.toggle("wrong2");
      }
  }) 
  
  op4.addEventListener("click",()=>{  
    let user = n4; 
    if(user ==final){
        op4.classList.toggle("clicked3");
    }
     else{
        op4.classList.toggle("wrong3");
     }
  })  

 
   
