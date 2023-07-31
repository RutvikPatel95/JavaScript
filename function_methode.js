//==============================javascript callback function===============================
{
    // function a(name)
    // {
    //     console.log("Hi"+" "+name+" "+"how are you");
    // }
    // a("rutvik")
}

{
    function a(name,callback)
    {
        console.log("Hi"+" "+name);
        callback()
    }
    function callMe()
    {
        console.log("how are you");
    }
    a("rutvik",callMe)
}
//==========================arrow function================================


