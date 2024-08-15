""" Práctica Loop For 3
Dada la siguiente lista de números, realiza la suma de todos los números pares e impares* por separado en las variables suma_pares y suma_impares respectivamente:

lista_numeros = [1,5,8,7,6,8,2,5,2,6,4,8,5,9,8,3,5,4,2,5,6,4]

*Recordando de los días anteriores: el módulo (o resto) de un número dividido 2 es cero cuando dicho valor es par, y 1 cuando es impar

num % 2 == 0 (valores pares)

num % 2 == 1 (valores impares) """

# RESPUESTA =========================================

lista_numeros = [1,5,8,7,6,8,2,5,2,6,4,8,5,9,8,3,5,4,2,5,6,4]
suma_pares = 0
suma_impares = 0

for suma in lista_numeros:
    if suma % 2 == 0:
        suma_pares = suma_pares + suma
    elif suma % 2 == 1:
        suma_impares = suma_impares + suma
        
print(suma_pares)
print(suma_impares)

# =================================================


numeros = [1, 2, 3, 4, 5, 6]

for numero in numeros:
    indice_numero = numeros.index(numero) 
    print(f"Numero: {numero} y su indice es {indice_numero}")



lista = ["panblo", "laura", "luis", "fernanda", "orangel"]

for nombre in lista:
    if nombre.startswith("l"):
        print(nombre)
    else:
        print("Nombre no comienza con l")
        

mi_valor = 0

for num in numeros:
    mi_valor = mi_valor + num
print(mi_valor)


palabra = "Python es genial"
for letra in palabra:
    print(letra)
    

for letra in "Python":
    print(letra)
    

for a,b in [[1,2], [3,4], [5,6]]:
    print(a)
    print(b)
    

dic = {
    "clave1" : "a",
    "clave2" : "b",
    "clave3" : "c",
    "clave4" : "d",  
}

for item in dic.items():
    print(item) 
    
for a, b in dic.items():
    print(a, b) 
    