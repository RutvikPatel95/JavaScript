// const a= [];
// a.push("jay","vishal","rutvik","rohan");
// console.log(a);
// a[7]="nil";
// console.log(a[7]);
// console.log(a.length);

// console.log(Object.keys(a));
// console.log(a);

//  a.length=4;
// console.log(Object.keys(a));
//  console.log(a);

// let a=["yuvaraj","kajal","rutvik","nil"];
// console.log(a[2],a[3]);

// Array length properties

// let a=[
//    "a",
//    "b",
//    "c",
//    "d"
// ];
// let b=a[4]="e";
// console.log(a);
// console.log(b);

/*accessing the first element*/
// let a=["yuvaraj","kajal","rutvik","nil"];
// console.log(a[4]);
// console.log(a);

/*accessing the last Element*/

// let a=["yuvaraj","kajal","rutvik","nil"];
// console.log(a.length-4);
// console.log(a);

// Accessing The First Array Element

// var fruits =["Banana","Orange","Apple","Mango"];
// console.log(fruits[3]);
// console.log(fruits);

// Accessing The Last Array Element

// var fruits =["Banana","Orange","Apple","Mango"];
// var text=(fruits.length-3);
// console.log(fruits);

// Adding Array Element

// var fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;

// function fun()
// {
//     fruits.push("Lemon");
//     document.getElementById("demo").innerHTML=fruits;
//     document.getElementById("demo1").innerHTML=fruits.length;   
// }

// Adding Array Element Without Push Function

// var fruits =["Banana","Orange","Apple","Mango"];
// document.getElementById("demo").innerHTML=fruits;

// function fun()
// {
//     fruits[fruits.length]="Lemon";
//     document.getElementById("demo").innerHTML=fruits;
//     document.getElementById("demo1").innerHTML=fruits.length;   
// }

//array
{
// var fruits =["Banana","Orange","Apple","Mango"];
// fruits[7]="kiwi";
// console.log(fruits);

// a ="";
// for(i=0;i<fruits.length;i++)
// {
//     a=a+fruits[i];
// }
}

/***************************************************************************************************** */
//------------------------------------array methode--------------------------------------------//
1.
//converting array to strings
{
    // let a=["a","b","c","d"];
    // console.log(a.toString());
}
2.
//join()method
{
    // let name=["jay","nil","rutvik","vishal"];
    // document.getElementById("demo1").innerHTML=name.join("*");
}

3.
//popping methode
{
    // let name=["jay","nil","rutvik","vishal"];
    // document.getElementById("demo").innerHTML=name;
    // name.pop();
    // name.pop();
    // document.getElementById("demo1").innerHTML=name;

}
     //pop() method returns the value that was "popedout"
    {
    //  let name=["jay","nil","rutvik","vishal"];
    //  document.getElementById("demo").innerHTML=name.pop();
    //  document.getElementById("demo1").innerHTML=name;

    }
     // javascrip array push
    // push() new element to a array
    {
    // let name=["jay","nil","rutvik","vishal"];
    // document.getElementById("demo").innerHTML=name;
    // name.push("viral");
    // document.getElementById("demo").innerHTML=name;
    }

    // push() method returns the new array length
     {
    // let name=["jay","nil","rutvik","vishal"];
    //  document.getElementById("demo").innerHTML=name.push("viral");
    //  document.getElementById("demo1").innerHTML=name;
     }

     // shifting elements
    //  java scrip shifting


     //tha shift()method removes the first array element and "shifts" all other element to a lower index
  {
    // let name=["jay","nil","rutvik","vishal"];
    // document.getElementById("demo").innerHTML=name;
    // name.shift();
    // name.shift();
    // document.getElementById("demo").innerHTML=name;
  }   
      
  //shift ()method return the value
   {
    // let name=["jay","nil","rutvik","vishal"];
    //  document.getElementById("demo").innerHTML=name.shift("viral");
    //  document.getElementById("demo1").innerHTML=name;
   }

   //javascrip array unshift
{
    // let name=["jay","nil","rutvik","vishal"];
    // document.getElementById("demo").innerHTML=name;
    // name.unshift("viral");
    // document.getElementById("demo1").innerHTML=name;
}
 
   // unshift() method return the new array lenght
   {
    //  let name=["jay","nil","rutvik","vishal"];
    //  document.getElementById("demo").innerHTML=name.unshift("viral");
    //  document.getElementById("demo1").innerHTML=name;
   }

   // changing element
   {
    // let name=["jay","nil","rutvik","vishal"];
    // document.getElementById("demo").innerHTML=name;
    // name[1]="viral";
    // document.getElementById("demo1").innerHTML=name;
   }

   //java scrip  add element
   {
    //   let name=["jay","nil","rutvik","vishal"];
    // document.getElementById("demo").innerHTML=name;
    // name[name.length]="viral";
    // document.getElementById("demo1").innerHTML=name;
   }

   // javascrip array delete()
   {
    //     let name=["jay","nil","rutvik","vishal"];
    //   document.getElementById("demo").innerHTML=name;
    //   delete name[3];
    //   name[3]="viral";
    //   document.getElementById("demo1").innerHTML=name;
   }

   //merging array

{
//    const a=["payal","kajal","mansi"];
//    const b=["vishal","viral","nil"];
//    const c=["jay","rutvik","prince"];
//    const d=c.concat(a,b);
//    document.getElementById("demo").innerHTML=d;
}
   // the concat()method does not change the existing array .it always returns a new array


 // javascrip array splice()
 
 {
    // let name=["jay","nil","rutvik","vishal"];
    // document.getElementById("demo").innerHTML=name;
    // name.splice(1,3,"laxit","nikhil");
    // document.getElementById("demo1").innerHTML=name;

 }

  {
    //  const name=["jay","nil","rutvik","vishal"];
    //  document.getElementById("demo").innerHTML="original array:<br>"+name;

    //  let removed=name.splice(1,2,"nikhil","viral");
    //  document.getElementById("demo1").innerHTML="new array array:<br>"+name;
    
    //  document.getElementById("demo2").innerHTML="removed items:<br>"+removed;
  }

  //using splice () to remov element
{
    // const name=["jay","nil","rutvik","vishal"];
    // document.getElementById("demo1").innerHTML=name;
    // name.splice(0,2);
    // document.getElementById("demo2").innerHTML=name;  
}

//javascrip array slice()
{
    // const name=["jay","nil","rutvik","vishal"];
    // const newremove=name.slice(2);
    // document.getElementById("demo1").innerHTML=name + "<br><br>"+ newremove;
}
 
// array is array

{
    const name=["jay","nil","rutvik","vishal"];
    const names="string";
    console.log(Array.isArray(name));
}


//sorting array
{
    // const name=["jay","nil","rutvik","vishal"];
    // let names=name.sort();
    // console.log(name);
}

// reversing array
{
    // const name=["jay","nil","rutvik","vishal"];
    // console.log(name);
    // let names=name.reverse();
    // console.log(names);
    // let namess=name.sort();
    // console.log(namess);   
}

//number sort
{
    // const number=[23,52,36,32,31,96,200,300];
    //  console.log(number);
    
    // const number1=number.sort(function(a,b){return a-b});
    // console.log(number1);
    }

//javascript array fill methode
{
    // const name=["jay","viral","nil","rutvik","nikhil"];
    // const names=name.fill("1",3);
    // console.log(names);
}

//javascript array copywithin() method

{
    // const name=["jay","viral","nil","rutvik","nikhil"];
    // let names=name.copyWithin(2,4)
    // console.log(names);

}

// javascrip valueof()methode
{
    // const name=["jay","viral","nil","rutvik","nikhil"];
    // const a=name.valueOf();
    // console.log(a);

}

// javascript flat ()methode
{
    // const name=[1,2,3[4,[5,6,[7,8,9]]]];
    // let name1=name.flat();
    // let name2=name.flat(2);
    // let name3=name.flat(3);
    // let name4=name.flat(4);
    // console.log(name1);
    // console.log(name2);
    // console.log(name3);
    // console.log(name4);
}
