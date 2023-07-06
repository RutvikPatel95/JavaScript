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
// console.log(a[1]);
// console.log(a);

/*accessing the last Element*/

// let a=["yuvaraj","kajal","rutvik","nil"];
// console.log(a.length-3);
// console.log(a);

// Accessing The First Array Element

// var fruits =["Banana","Orange","Apple","Mango"];
// console.log(fruits[0]);
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
    // document.getElementById("demo").innerHTML=name;

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

   const a=["payal","kajal","mansi"];
   const b=["vishal","viral","nil"];
   const c=["jay","rutvik","prince"];
   const d=a.concat(b,c);
   document.getElementById

