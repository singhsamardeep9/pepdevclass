// //for +ve elements and values less then 1000
let a=[2,5,9,1,11,87];
function las(arr)
{
    let largest=-1;
    let smallest=1001;
    for(let i=0; i<=arr.length; i++)
    {
        if(arr[i]>largest)
        {
            largest=a[i];
        }
        if(arr[i]<smallest)
        {
            smallest=arr[i];
        }
    }
    console.log(smallest +" "+ largest);
}
las(a);