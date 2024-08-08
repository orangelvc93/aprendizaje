texto = 'Este es el texto de prueba'

resultado = texto

print(resultado.upper())
print(resultado.lower())

# Guardamos todas las palabras en una lista (array)
print(resultado.split())

# Podemos indicar cual es el elemento separador de split
print(resultado.split("t"))

# Encontrar o metodo find devuelve -1 si no encuentra el elemento
print(resultado.find("s"))

# Encontrar un fragmento del texto y remplazarlo por otro
print(resultado.replace("prueba", "Orangel"))

frase = "Si la implementación es difícil de explicar, puede que sea una mala idea."
frase_nueva = frase.replace("difícil", "fácil").replace("mala","buena")
print(frase_nueva)

# Para unir variables
a = "Aprender"
b = "Python"
c = "es"
d = "divertido"
e = " ".join([a,b,c,d])
print(e)

lista_palabras = ["La","legibilidad","cuenta."]
unir = " ".join(lista_palabras)
print(unir)