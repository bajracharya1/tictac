var
    a='X'; a1='O';  a2='O';
    b='X'; b1='X';  b2='O';
    c='O'; c1='X';  c2=null;

if (a==b && a==c && a1!==null || a1==b1 && a1==c1 && b1!==null || a2==b2 && a1==c2 && c1!==null && b2!==null){ //checks column
    console.log ('win')
}

else if (a==a1 && a==a2 && a!==null|| b==b1 && b1==b2 && b!==null|| c==c1 && c1==c2 && c!==null){ //checks row
    console.log ('win')

}

 else if (a==b1 && b1==c2  &&  c2!==null || c==b1 && b1==a2 && a2!==null){ //checks diagonal
    console.log ('win')

}
else if (a==null || b==null || c==null || a1==null || b1==null || c1==null || a2==null || b2==null || c2==null){ //checks if the value is null
    console.log ('Keep Playing')

}
else  {

    console.log ('loose')
}
