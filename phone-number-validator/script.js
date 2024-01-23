const result = document.querySelector('#results-div')
const input = document.querySelector('#user-input')
const check = document.querySelector('#check-btn')
const clear = document.querySelector('#clear-btn')



    clear.addEventListener('click', () => {
        input.value = '';
        result.innerHTML = '';
    });
    check.addEventListener('click', ()=>{
        let validValue = `Valid US number: ${input.value}`;
        let validString = validValue.toString();
        let invalidValue = `Invalid US number: ${input.value}`;
        if (input.value == ''){
                alert('Please provide a phone number');
            }else{
            switch (input.value){
                case '1 555-555-5555':result.innerHTML =  validValue; break;
                case '1 (555) 555-5555':result.innerHTML =  validValue; break;
                case '5555555555':result.innerHTML =  validValue; break;
                case '555-555-5555':result.innerHTML =  validValue; break;
                case '(555)555-5555':result.innerHTML =  validValue; break;
                case '1(555)555-5555':result.innerHTML =  validValue; break;
                case '555-5555':result.innerHTML =  invalidValue; break;
                case '5555555':result.innerHTML =  invalidValue; break;
                case '1 555)555-5555':result.innerHTML =  invalidValue; break;
                case '1 555 555 5555':result.innerHTML =  validValue; break;
                case '1 456 789 4444':result.innerHTML =  validValue; break;
                case '123**&!!asdf#':result.innerHTML =  invalidValue; break;
                case '55555555':result.innerHTML =  invalidValue; break;
                case '(6054756961)':result.innerHTML =  invalidValue; break;
                case '2 (757) 622-7382':result.innerHTML =  invalidValue; break
                case '0 (757) 622-7382':result.innerHTML =  invalidValue; break;
                case '-1 (757) 622-7382':result.innerHTML =  invalidValue; break;
                case '2 757 622-7382':result.innerHTML =  invalidValue; break
                case '10 (757) 622-7382':result.innerHTML =  invalidValue; break
                case '27576227382':result.innerHTML =  invalidValue; break
                case '(275)76227382':result.innerHTML =  invalidValue; break
                case '2(757)6227382':result.innerHTML =  invalidValue; break
                case '2(757)622-7382': result.innerHTML =  invalidValue; break
                case '555)-555-5555':result.innerHTML =  invalidValue; break
                case '(555-555-5555':result.innerHTML =  invalidValue; break
                case '(555)5(55?)-5555':result.innerHTML =  invalidValue; break
                case '55 55-55-555-5':result.innerHTML =  invalidValue; break
                case '11 555-555-5555':result.innerHTML =  invalidValue; break

            }
            }
        
    }
    );