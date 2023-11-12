
const celsiusInput = document.getElementById('celsius')
const fahrenheitInput = document.getElementById('fahrenheit')
const kelvinInput = document.getElementById('kelvin')

const inputs = document.getElementsByClassName("input");

/* Tento kód vytváří posluchače události 'input' na všech vstupech (inputových polích), která jsou získána v proměnné inputs. Kód následně reaguje na změnu hodnoty v těchto polích a provádí konverze mezi teplotními stupni (Celsius, Fahrenheit, Kelvin) podle vstupu uživatele. */
for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
        //Tento for cyklus projde všechna inputová pole (získaná z pole inputs) na stránce.



    input.addEventListener('input', (e) => {
        // Pro každé inputové pole je přidán posluchač události 'input'. To znamená, že kód reaguje na změny v hodnotě vstupního pole, když uživatel něco zadá nebo upraví.
        let value = parseFloat(e.target.value)
        // Zde je hodnota vstupního pole (e.target.value) převedena na číslo s desetinnými místy pomocí parseFloat. Tím se zajistí, že můžeme provádět matematické operace s touto hodnotou.
        
        switch (e.target.name) {
            //V rámci switch příkazu se rozhoduje, které konverze teplotních stupňů se mají provést na základě názvu vstupního pole (získaného z e.target.name).
            case 'celsius':
                fahrenheitInput.value = (value * 1.8) + 32
                kelvinInput.value = value + 273.15
                break
            case 'fahrenheit':
                celsiusInput.value = (value -32) / 1.8   
                kelvinInput.value = ((value -32) / 1.8) + 273.15                
                break
            case 'kelvin':
                celsiusInput.value = value - 273.15
                fahrenheitInput.value = ((value - 273.15) *1.8) + 32
                break
                // V rámci každého case bloku (pro každý název vstupu - 'celsius', 'fahrenheit', 'kelvin') se provádí konverze mezi teplotními stupni podle zadané hodnoty.
        }
    })
}

