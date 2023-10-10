document.addEventListener("DOMContentLoaded",()=>{

    const et2000 = document.getElementById('et2000');
    const et500 = document.getElementById('et500');
    const et200 = document.getElementById('et200');
    const et100 = document.getElementById('et100');
    const et50 = document.getElementById('et50');
    const et20 = document.getElementById('et20');
    const et10 = document.getElementById('et10');
    const et5 = document.getElementById('et5');
    const et2 = document.getElementById('et2');
    const et1 = document.getElementById('et1');

    const txt2000 = document.getElementById('txt2000');
    const txt500 = document.getElementById('txt500');
    const txt200 = document.getElementById('txt200');
    const txt100 = document.getElementById('txt100');
    const txt50 = document.getElementById('txt50');
    const txt20 = document.getElementById('txt20');
    const txt10 = document.getElementById('txt10');
    const txt5 = document.getElementById('txt5');
    const txt2 = document.getElementById('txt2');
    const txt1 = document.getElementById('txt1');

    const btnReset = document.getElementById('btnReset');
    const txtFinalCash = document.getElementById('txtFinalCash');
    
    const txtFinalCashInWords = document.getElementById('txtFinalCashInWords');

    const cashInputs = [et2000,et500,et200,et100,et50,et20,et10,et5,et2,et1];
    const cashTexts = [txt2000,txt500,txt200,txt100,txt50,txt20,txt10,txt5,txt2,txt1];

    cashInputs.forEach((input , index)=>{
        input.addEventListener('input',()=>{
            cashCalculate(index);
        })
    });

    function cashCalculate(index){
        const denomination = [2000,500,200,100,50,20,10,5,2,1];
        const rowValue = cashInputs[index].value * denomination[index];

        cashTexts[index].textContent = rowValue;
        
        totalCash();
    }

  
    function totalCash(){
        let totalCashValue = 0;
        cashTexts.forEach((text)=>{
            totalCashValue += parseInt(text.textContent);
        });

        txtFinalCash.textContent = "Total Cash: " + totalCashValue;

        txtFinalCashInWords.textContent = `Total Cash In Words: ${converToWord(totalCashValue)}`;
    }
    
    btnReset.addEventListener("click" , clearData);

    function clearData(){
        cashInputs.forEach((input)=>{
            input.value = "";
        });

        cashTexts.forEach((text)=>{
            text.textContent = 0;
        });

        txtFinalCash.textContent = "Total Cash: " + 0;

    }

    cashInputs.forEach(input =>{
        input.addEventListener("input",()=>{
            const value = parseInt(input.value , 10);
            if(isNaN(value) || value < 0){
                input.value = "";
                alert("Can not insert negitive value");
            }
        });
    });


    function converToWord(number){
        const units = ['','One','Two','Three','Four','Five','Six','seven','Eight','Nine'];
        const teens = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Ninetten'];
        const tens = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','nonety'];


        if(number === 0)
        {
            return 'zero';
        }
        let words = '';
        while(number > 0)
        {
            
            if(number > 0 && number < 10)
            {
                words += units[number];
                number = flore(number/10);
            }
            else if(number >= 10 && number < 20)
            {
                let digit = number%10;
                words += teens[digit];
                number = 0;
            }
            else if(number >= 20 && number < 100)
            {
                let digit = flore(number/10);
                words += ' ' + tens[digit];
                number = number%10;
            }
        }
        return words;
    }

});