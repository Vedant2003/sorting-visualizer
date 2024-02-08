const n=10;
const arry=[];
init();
function init(){
    for(let i=0;i<n;i++)
    {
        arry[i]=Math.random();
    }
    showbars();
}
function play()
{
    const copy=[...arry];
    const moves=bubblesort(copy);
    animate(moves);
}
function animate(moves)
{
    if(moves.length==0)
    {
        showbars();
        return;
    }
    const move=moves.shift();
    const [i,j]=move.indices;
    if(move.type=="swap")
    {
        [arry[i],arry[j]]=[arry[j],arry[i]];
    }

    showbars(move);
    setTimeout(function(){
        animate(moves);
    },200);
}

function bubblesort(arry)
{
    const moves=[];
do{
    var swapped=false;
    for(let i=1;i<arry.length;i++)
    {
        moves.push({indices:[i-1,i],type:"comp"});
        if(arry[i-1]>arry[i])
        {
            swapped=true;
            moves.push({indices:[i-1,i],type:"swap"});
            [arry[i-1],arry[i]]=[arry[i],arry[i-1]];
        }
    }
}
while(swapped);
return moves;
}
function showbars(move){
    container.innerHTML="";
    for(let i=0;i<arry.length;i++){
        const bar=document.createElement("div");
        bar.style.height=arry[i]*100+"%";
        bar.classList.add("bar");
        if(move && move.indices.includes(i)){
            bar.style.backgroundColor=move.type=="swap"?"red":"blue";
        }
        container.appendChild(bar);
}
}
