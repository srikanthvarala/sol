function majorityElement(arr, n)
{
    let max_count = 0;
    let index = 0; 
     
    for(let i = 0; i < n; i++)
    {
        let count = 0;
        for(let j = 0; j < n; j++)
        {
            if (arr[i] == arr[j])
                count++;
        }
        if (count > max_count)
        {
            max_count = count;
            index = i;
        }
    }
    if (max_count > n / 2)
        console.log(arr[index]);
    else
        console.log("No Majority Element");
}
 

let arr = [3,3,4,2,4,4,2,4,4];
let n = arr.length;
majorityElement(arr, n);