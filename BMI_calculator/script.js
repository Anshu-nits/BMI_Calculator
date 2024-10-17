const form=document.querySelector('form')
console.log(form)
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('.result')
    if(height==='' || height<0 || isNaN(height))
    {
       result.innerHTML=`Please enter a valid height`
    }
    else if(weight==='' || weight<0 || isNaN(weight))
    {
        result.innerHTML=`Please enter a valid weight`
    }
    else
    {
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6)
        {
            result.innerHTML=`Your BMI is ${bmi} and you are Under-Weight`
        }
        else if(bmi<=24.9)
        {
            result.innerHTML=`Your BMI is ${bmi} and you are Normal`
        }
        else
        {
            result.innerHTML=`Your BMI is ${bmi} and you are Over-Weight`
        }
    }
})