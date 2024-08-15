from random import *

nombre = input("Ingresa tu nombre para participar: ")
print(
    f"Bueno {nombre} he pensado un número entre 1 y 100, y tienes solo ocho intentos para adivinar cuál crees que es el número"
)
print("\n")

numero_aleatorio = randint(1, 100)
# print(numero_aleatorio)  # Solo para pruebas, quita esta línea para jugar realmente
contador = 0

# Primer bucle para asegurarnos de que el número ingresado esté en el rango permitido
while True:
    numero = int(input("Ingresa un numero del 1 al 100: "))
    if 1 <= numero <= 100:
        break  # Salimos del bucle si está permitido
    else:
        print("El numero no está permitido. Intenta con otro")

# Segundo bucle para el juego de adivinanza
while numero_aleatorio != numero and contador < 8:
    contador += 1
    if contador == 1008:
        break  # Rompemos el bucle si ya no quedan vidas
    elif numero < numero_aleatorio:
        print(f"Numero incorrecto, te quedan {8 - contador} vidas.")
        numero = int(input("\nIntenta con un numero mayor: "))
    elif numero > numero_aleatorio:
        print(f"Numero incorrecto, te quedan {8 - contador} vidas.")
        numero = int(input("\nIntenta con un numero menor: "))

if contador < 8:
    print(
        f"\n Felicidades {nombre}, el numero {numero} es el correcto. Lo lograste con {contador + 1} intentos"
    )
else:
    print("\n Lo siento, te quedaste sin intentos")
