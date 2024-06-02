const form = document.querySelector('form')
// console.log(form)
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height==='' || height<=0 || isNaN(height)){
        results.innerHTML = "Plase given valid height";
    }
    else if(weight==='' || weight<=0 || isNaN(weight)){
        results.innerHTML = "Plase given valid weight";
    }
    else{
        const guide = document.querySelector('#weight-guide');
        // console.log(guide.children)
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        results.innerHTML = `<span>your BMI Index is ${BMI}</span>`;
        if(BMI<=18.6){
            guide.children[1].style.color = "red"
            guide.children[2].style.color = "black"
            guide.children[3].style.color = "black"
        }
        else if(BMI>24.9){
            guide.children[3].style.color = "red"
            guide.children[1].style.color = "black"
            guide.children[2].style.color = "black"

        }
        else{
            guide.children[2].style.color = "green"
            guide.children[3].style.color = "black"
            guide.children[1].style.color = "black"

        }

    }

})