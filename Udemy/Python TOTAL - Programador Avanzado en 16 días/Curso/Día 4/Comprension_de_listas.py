palabra = "python"
lista = []

# for letra in palabra:
#     lista.append(letra)
# lista = [letra for letra in palabra]
lista = [letra for letra in "python"]
print(lista)


lista = [numero for numero in range(0, 50, 2)]
print(lista)


lista = [numero * 2 for numero in range(0, 50)]
print(lista)

lista = [numero for numero in range(0, 50) if numero * 2 < 10]
print(lista)


lista = [numero if numero * 2 < 10 else "es mayor" for numero in range(0, 50)]
print(lista)


pies = [10, 20, 30, 40, 50]
metros = [p / 3.281 for p in pies]
print(metros)


""" Para la siguiente lista de temperaturas en grados Fahrenheit, expresa estos mismos valores en una nueva lista de valores de temperatura en grados Celsius. La conversión entre tipo de unidades es la siguiente:
°C = (°F - 32) * (5/9)
o expresado de otro modo:
(grados_fahrenheit-32)*(5/9)
La lista de temperaturas es la siguiente:
temperatura_fahrenheit = [32, 212, 275] 
Almacena esta nueva lista en una variable llamada grados_celsius """

temperatura_fahrenheit = [32, 212, 275]

grados_celsius = [(celsius - 32) * (5 / 9) for celsius in temperatura_fahrenheit]
print(grados_celsius)
