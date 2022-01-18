let myTable = document.querySelector(".main .tbl");
let start=document.querySelector(".start");
let sol=document.querySelector(".sol");
let red;
let arr=[
    [1,2,3,4,5,6,7,8,9],
    [4,5,6,7,8,9,1,2,3],
    [7,8,9,1,2,3,4,5,6],
    [9,1,2,3,4,5,6,7,8],
    [3,4,5,6,7,8,9,1,2],
    [6,7,8,9,1,2,3,4,5],
    [8,9,1,2,3,4,5,6,7],
    [2,3,4,5,6,7,8,9,1],
    [5,6,7,8,9,1,2,3,4],
]
let minute=document.getElementById("minute");
let second=document.getElementById("second");
let myArr0=[...arr];
let iTime=0;
let start0=true;
start.addEventListener("click",function(){
    let selector=document.querySelector("select");
    selector=selector.options[selector.selectedIndex].value;
    if(start0){
 setInterval(function(){
    start.addEventListener("click",function(){
        iTime=0
    })
    minute.innerText=parseInt(iTime/60);
    second.innerText=parseInt(iTime%60);
    iTime++;
},1000);
    }
    start0=false;
    let myArr;
    let x;
    let y;
    let z=0;
    myTable.innerHTML="";
    for(let xi=0;xi<arr.length;xi++){
        x=Math.floor(Math.random()*3);
        y=Math.floor(Math.random()*3);
        if(x==y){
            x++;
        }
        x=((x%3)+z)%9;
        y=((y%3)+z)%9;
        for(let yi=0;yi<arr[0].length;yi++){
            myArr=arr[yi][x];
            arr[yi][x]=arr[yi][y];
            arr[yi][y]=myArr;
        }
        z+=3;
        myArr=arr[x];
        arr[x]=arr[y];
        arr[y]=myArr;
    }
    myArr0[0]=[...arr[0]];
    myArr0[1]=[...arr[1]];
    myArr0[2]=[...arr[2]];
    myArr0[3]=[...arr[3]];
    myArr0[4]=[...arr[4]];
    myArr0[5]=[...arr[5]];
    myArr0[6]=[...arr[6]];
    myArr0[7]=[...arr[7]];
    myArr0[8]=[...arr[8]];
    
    let i0=1;
    let i1=1;
    let i2=1;

        for(let i=0;i<arr.length;i++){
            for(let ii=0;ii<arr.length;ii+=2){
                
    if(selector=="Easy"){
        if(myArr0[i][ii]==i0){
            myArr0[i][ii]="";
        }
        else if(myArr0[i][ii]==(i1+3)){
            myArr0[i][ii]="";
        }
        else if(myArr0[i][ii+1]==(i2+6)){
            myArr0[i][ii+1]="";
        }
        else if(myArr0[i][ii+1]==(i0+1)%4){
            myArr0[i][ii+1]="";
        }
        
        if(myArr0[ii][i]==(i0+2)%4){
            myArr0[ii][i]="";
        }
        else if(myArr0[ii][i]==(i1+1)%4+3){
            myArr0[ii][i]="";
        }
        else if(myArr0[ii][i]==(i1+2)%4+3){
            myArr0[ii][i]="";
        }
        else if(myArr0[ii][i]==(i2+1)%4+6){
            myArr0[ii][i]="";
        }
        else if(myArr0[ii][i]==(i2+2)%4+6){
            myArr0[ii][i]="";
        }
    }
    else if(selector=="Hard"){
                if(myArr0[i][ii]==i0){
                    myArr0[i][ii]="";
                }
                else if(myArr0[i][ii]==(i1+3)){
                    myArr0[i][ii]="";
                }
                else if(myArr0[i][ii]==(i2+6)){
                    myArr0[i][ii]="";
                }
                else if(myArr0[i][ii]==(i0+1)%4){
                    myArr0[i][ii]="";
                }//kjlghyujhgf
                
                if(myArr0[ii][i]==(i0+2)%4){
                    myArr0[ii][i]="";
                }
                else if(myArr0[ii][i]==(i1+1)%4+3){
                    myArr0[ii][i]="";
                }
                else if(myArr0[ii][i]==(i1+2)%4+3){
                    myArr0[ii][i]="";
                }
                else if(myArr0[ii][i]==(i2+1)%4+6){
                    myArr0[ii][i]="";
                }
                else if(myArr0[ii][i]==(i2+2)%4+6){
                    myArr0[ii][i]="";
                }
            }
        }}
    for(let xi=0;xi<arr.length;xi++){
        let tr0=document.createElement("tr");
        myTable.appendChild(tr0);
        for(let yi=0;yi<arr[0].length;yi++){
            tr0.innerHTML+=`<td><input class='myInput'  value='${myArr0[xi][yi]}' type='text'></td>`;
        }
    }
    let iix=0;
    let inputs=document.querySelectorAll("input");
    for(let i=0;i<inputs.length;i++){
        
        inputs[i].addEventListener("change",function(e){
            for( iix=0;iix<inputs.length;iix++){
                
            if(e.target==inputs[iix]){
                if(inputs[iix].value!=arr[parseInt(iix/9)][iix%9]){
                    inputs[iix].style.backgroundColor="red";
                    break;
                }
                else{
                    inputs[iix].style.backgroundColor="white";
                }
            }}})
        inputs[i].addEventListener("click",function(){
            let pos0=parseInt(i/9);
            let pos1=parseInt(i%9);
            for(let xi=0;xi<inputs.length;xi++){if(inputs[xi].style.backgroundColor=="red"){
            }else{
                   if(inputs[i].value!=""&&inputs[i].value==inputs[xi].value){
                       
                        inputs[xi].style.backgroundColor="rgb(0, 87, 94)";
                }else{
                    inputs[xi].style.backgroundColor="white";
                }
            }}
            for(let xi=0;xi<arr.length;xi++){
                if(inputs[pos0*9+xi].style.backgroundColor=="red"){
                    inputs[pos1+xi*9].style.backgroundColor="rgb(83, 228, 238)";
                }
                else if(inputs[pos1+xi*9].style.backgroundColor=="red"){
                    inputs[pos0*9+xi].style.backgroundColor="rgb(83, 228, 238)";
                }
                else{
                inputs[pos0*9+xi].style.backgroundColor="rgb(83, 228, 238)";
                inputs[pos1+xi*9].style.backgroundColor="rgb(83, 228, 238)";}
            }if(inputs[i].style.backgroundColor!="red"){
            inputs[i].style.backgroundColor="rgb(0, 87, 94)";}
        })
    }
})
sol.addEventListener("click",function(){
    let inputs=document.querySelectorAll("input");
    for(let xi=0;xi<arr.length;xi++){
        for(let yi=0;yi<arr[0].length;yi++){
            inputs[xi*9+yi].style.backgroundColor="white";
            if(inputs[xi*9+yi].value==""||inputs[xi*9+yi].style.backgroundColor=="red"){
                inputs[xi*9+yi].style.backgroundColor="green";
            }
            inputs[xi*9+yi].value=arr[xi][yi]};
        }
    
})