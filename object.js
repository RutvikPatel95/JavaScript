//javascript Object methode

//---------------object-------------------------
{
// const a={

//     name :"rohan",
//     class:10
// };
// console.log(  a);
}

//----------------------Object  Declaration----------------------------
{
    // const a={
    //     key1:value1,
    //     key2:value2
    // }
}

// ---------------------object creation----------------------------
{
    // const a={
    //     name:'nil',
    //     free:65000
    // }
    // console.log(typeof a);
}

//--------------------------Object Properties-----------------------
{
    // const a={
    //     name : 'rutik',
    //     age:20
    // };
   // properties= name,age;
}

//----------------------------javascript dot using-------------------------------
{
    // const a={
    //     name:'jay',
    //     class:10
    // }
    // console.log(a.class);
}

//--------------------------bracket-------------------------------------
{
    // const a={
    //     name:'nil',
    //     age :29
    // }
    // console.log(a["age"]);
}

//--------------------------two object----------------------------------------
{
    // const a={
    //     name:"rutvik",
    //     class:10,
    //     marks:{
    //         gujarati:70,
    //         math:52
    //     }
    // }
    // console.log(a.marks);
    // console.log(a.marks.gujarati);
}

//--------------------------methode----------------------------------------

1.
//assing() properties

// const obj1={a:1};
// const obj2={b:2};
// const obj3={c:3};

// const obj4= Object.assign(obj1, obj2, obj3);
// console.log(obj4);


// assing () return value
{
    // const obj={
    //     name:"rutvik",
    //     class:10
    // }
    // const obj1={}

    // const obj2=Object.assign(obj1,obj)
    // console.log(obj1);
    // console.log(obj2);
}

//-----------------------------------------2.javascript object.create-------------------
{
    // const studant={
    //     name:"jay",
    //     age:20,
    //     marks:95,
    //     display(){
    //         console.log("marks :",this.marks);
    //     }       
    // }
    // const a=Object.create(studant)
    // a.marks =85;
    // a.display();
}

//-------------------------------------3.entries()---------------------------------------------
{
    // const obj={name:"rutvk",age:20,location:"surat"};
    // console.log(Object.entries(obj));
}
{
    // const obj={48:"a",58:"c",69:"d"};
    // console.log(Object.entries(obj));
}
{
// const a={name:"rutvk",age:20,location:"surat"};
// for(const[key,value] of Object.entries(a))
// console.log(`${key}: ${value}`);
}

//-----------------------------------4.object.is------------------------------------------------
{
    // const a={a:1,b:2}
    // const b={};
    // console.log(Object.is(a,b));
}

{
    // const a={a:1};
    // const b={a:1}
    // console.log(Object.is(a,a));
    // console.log(Object.is(a,b));
}   

{
    
    // console.log(Object.is([], []));  

    // console.log(Object.is(0, -0));  

    // console.log(Object.is(-0, -0)); 

    // console.log(Object.is(NaN, 0/0));
}
//-----------------------------------5.hasownProperty()---------------------------------------
{
    // const a={}
    // a.name="rutvik"
    // console.log(a);
    // console.log(a.hasOwnProperty("id"));
}
{
    // const obj={name:"jay",age:20}
    // console.log(obj.hasOwnProperty("name"));
    // console.log(obj.hasOwnProperty("age"));
    // console.log(obj.hasOwnProperty("id"));
}
//-----------------------------6.freere()------------------------------------------------------
{
    // const a={
    //     Name:"abc",
    //     Age:20
    // }
    //  //let x=Object.freeze(a)

    // a.Age=25;
    // console.log(a.Age);
}

//--------------------------------------7.getOwnPropertyNames()-------------------------------\
{
    // const a={
    //     name:"rutvik",
    //     class:10,
    //     age:20
    // }
    // const b=Object.getOwnPropertyNames(a);
    // console.log(b);
}

//--------------------------------------8.Object.setPrototypeOf()------------------------------------
{
    // const obj={}
    // const obj1={name:"Rutvik"};
    // Object.setPrototypeOf(obj,obj1)
    // console.log(obj.name);
}

//------------------------------------9.Object.toString()-------------------------------------------
{
    // const obj=10
    // console.log(typeof obj);
    // console.log(typeof obj.toString());
}

//--------------------------------10.object.valuesof()-----------------------------------------------
{
    // const num =12
    // console.log(num);
    // console.log(num.valueOf());

}
//--------------------------------------11.object.values--------------------------------------------
{
    // const a={65:"rutvik",86:"jay",89:"vishal"};
    // console.log(Object.values(a));
}
{
    // const a={65:"RUTVIK",86:"JAY",89:"VISHAL"};
    // console.log(Object.values(a));

}
{
    // const string="rutvik"
    // console.log(Object.values(string));
}