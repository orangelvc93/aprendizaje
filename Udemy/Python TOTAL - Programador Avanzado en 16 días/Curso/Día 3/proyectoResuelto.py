frase = input("Ingresa una frase para ser revisada: ").lower()
letras = []

letras.append(input("Ingresa la primera letra: ").lower())
letras.append(input("Ingresa la segunda letra: ").lower())
letras.append(input("Ingresa la tercera letra: ").lower())

print("\n")

print("CANTIDAD DE LETRAS")
cantidad_letras1 = frase.count(letras[0])
cantidad_letras2 = frase.count(letras[1])
cantidad_letras3 = frase.count(letras[2])

print(f"Hemos encontrado la letra '{letras[0]}' un total de: {cantidad_letras1} veces")
print(f"Hemos encontrado la letra '{letras[1]}' un total de: {cantidad_letras2} veces")
print(f"Hemos encontrado la letra '{letras[2]}' un total de: {cantidad_letras3} veces")

print("\n")
print("CANTIDAD DE PALABRAS")

palabras = frase.split()
print(f"Hemos encontrado {len(palabras)} en tu texto")

print("\n")
print("LETRAS DE INICIO Y FIN")

letra_inicio = frase[0]
letra_fin = frase[-1]

print(f"La letra inicial es '{letra_inicio}' y la final es '{letra_fin}'")

print("\n")
print("TEXTO INVERTIDO")

palabras.reverse()
texto_invertido = " ".join(palabras)
print(texto_invertido) 

print("\n")
print("LA PALABRA PYTHON SE ENCUENTRA O NO?")

buscar_python = "python" in frase
dic = {
    True:"si",
    False:"no",
}

print(f"La palabra 'Python' {dic[buscar_python]} se encuentra en el texto")