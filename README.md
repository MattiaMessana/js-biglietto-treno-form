# BIGLIETTO TRENO 

Scrivere un programma che chieda all’utente:
1. Il numero di chilometri da percorrere
2. Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

--------

1. creiamo una pagina con due input che chieda di inserire età del passeggero e km che vuole percorrere e un bottone "invia".

2. al click sul bottone invia 
    - deve generare un biglietto del treno 



## SVOLGIMENTO

1. inseriamo event listener al bottone "invia" AL CLICK SUL BOTTONE :
    -  ### RACCOLTA DATI : 
        - prendiamo i valori inseriti dall'utente

    - ### ESECUZIONE LOGICA :
        
        - Se età e km dell'utente sono number allora procediamo altrimenti di dati inseirti non sono validi 
        
           - calcoliamo prezzo del bilgietto base : km * 0.21 
           - definiamo lo sconto :
                1. se l'utente è maggiorenne allora applichiamo sconto del 20%
                2. altrimenti se l'utente è over 65 applichiako sconto del 40%
                3. altrimenti non applichiamo sconti 
             
        - calcoliamo il prezzo scontato 
            - prezzo scontato = (prezzo base * sconto/100)    

    - ### OUTPUT 
        - creiamo un container con al suo interno il risultato dello sconto indicando:
            1. il prezzo di base
            2. lo sconto
            3. il prezzo finale

            
                
        



