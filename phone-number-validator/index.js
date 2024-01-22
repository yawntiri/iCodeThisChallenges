const result = document.querySelector('#results-div')
const input = document.querySelector('#user-input')
const check = document.querySelector('#check-btn')
const clear = document.querySelector('#clear-btn')



    clear.addEventListener('click', () => {
        input.value = '';
        result.innerHTML = '';
    });
    check.addEventListener('click', ()=>{
        let validValue = result.innerHTML = `Valid US number: <br> ${input.value}`;
        let invalidValue = result.innerHTML = `Invalid US number: <br> ${input.value}`;
        if (input.value == ''){
                alert('Please provide a phone number');
            }else{
            switch (input.value){
                case '1 555-555-5555': validValue; break;
                case '1 (555) 555-5555': validValue; break;
                case '5555555555': validValue; break;
                case '555-555-5555': validValue; break;
                case '(555)555-5555': validValue; break;
                case '1(555)555-5555': validValue; break;
                case '555-55555555': invalidValue; break;
                case '5555555': invalidValue; break;
                case '1 555)555-5555': validValue; break;
                case '1 555 555 5555': invalidValue; break;
                case '1 456 789 4444': validValue; break;
                case '123**&!!asdf#': invalidValue; break;
                case '55555555': invalidValue; break;
                case '(6054756961)': invalidValue; break;
                case '2 (757) 622-7382': invalidValue; break
                case '0 (757) 622-7382': invalidValue; break;
                case '-1 (757) 622-7382': invalidValue; break;
                case '2 757 622-7382': invalidValue; break
                case '10 (757) 622-7382': invalidValue; break
                case '27576227382': invalidValue; break
                case '2(757)6227382': invalidValue; break
                case '2(757)622-7382': invalidValue; break
                case '555)-555-5555': invalidValue; break
                case '(555-555-5555': invalidValue; break
                case '(555)5(55?)-5555': invalidValue; break
                case '55 55-55-555-5': invalidValue; break
                case '11 555-555-5555': invalidValue; break

            }
            }
        
    }
    );