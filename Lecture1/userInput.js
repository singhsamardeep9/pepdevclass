console.log(process.argv);//"process.argv" is a function to take user input in a pre defined array
function add(num)
{
//here the input for eg is'10' will be treated as string and not integer so the value to gets concatenated(102) 
    console.log(num+2);
}
add(process.argv[2]);
