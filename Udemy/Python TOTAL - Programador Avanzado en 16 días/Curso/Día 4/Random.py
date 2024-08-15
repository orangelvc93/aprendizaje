# from random import *    // Podemos importar todos los métodos

# O uno a uno
from random import randint
from random import uniform
from random import random
from random import choice
from random import shuffle

# Devuelve un numero entero
aleatorio = randint(1, 50)
print(aleatorio)

# Devuelve un decimal
aleatorio = round(uniform(1, 50), 1)
print(aleatorio)


# Devuelve un numero aleatorio del 0 al 1
aleatorio = random()
print(aleatorio)

# Devuelve un valor aleatorio de una lista
colors = ["azul", "rojo", "blanco", "verde", "negro"]
aleatorio = choice(colors)
print(aleatorio)

# Mezcla los elementos de una lista
numeros = list(range(0, 100, 5))
print(numeros)
shuffle(numeros)
print(numeros)
