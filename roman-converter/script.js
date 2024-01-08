
let convert = ()=>{
    let number = document.getElementById('number').value;
// ...........................

        //converting integer to roman numbers function
        let intToRoman = (num)=>{
            let roman = {
                M: 1000,
                CM: 900,
                D: 500,
                CD: 400,
                C: 100,
                XC: 90,
                L: 50,
                XL: 40,
                X: 10,
                IX: 9,
                V: 5,
                IV: 4,
                I: 1,
            };
            let str = '';
            if(num== ''){
                    str = 'Please enter a valid number';
            }else if( num < 1){
                    str = 'Please enter a number greater than or equal to 1';
            }else if(num >= 4000){
                    str = 'Please enter a number less than or equal to 3999';
            }else{
                    for (let i of Object.keys(roman)) {
                        while (num >= roman[i]) {
                            str += i;
                            num -= roman[i];
                        }
                    }
            }
            return str;
        }

// ...........................
   document.getElementById('output').innerHTML = `
   <p style="background-color:#0A0A23;color:white; width:100%; padding:0; margin:0;">
   ${intToRoman(number)}
   </p>
   `;
}

document.getElementById('convert-btn').addEventListener('click',convert);