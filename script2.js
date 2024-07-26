let num = 50; 

if (num < 49) {
    console.log("Not right")
}else if(num>100) {
    console.log("забагато")
} else  {
    console.log("Right")
};

(num == 50) ? console.log("Right") : console.log("Maybe")


switch (num) {
    case  num < 49:
        console.log("Not right");
        break;
    case  num > 100:
        console.log("Too much");
        break;
    case  num > 80:
        console.log("Still too much");
        break;
    case  50:
        console.log("right");
        break;
    default:
        console.log('Something gone wrong');
        break;    
}

num = 50; 

do {
    console.log(num);
    num++;
}
while(num < 55) ;
 
for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i)
}

//while (num < 55) {
  //  console.log(num);
 //   num++;
//}