# pedir al usuario que ingrese un texto 
# pedir al usuario que ingrese 3 letras a su eleccion 

# debemos devolver al usuario:   cantidad de veces que aparece cada letra , tip: almacena las etras en una lista
# tip 2: pasar el texto a minusculas para que no afecte el conteo

# decirle al usuario cuantas palabras hay en total del texto
# decirnos cual es la primera y ultima letra
# invertir el orden de las palabras

#tip4: usar bools para verificar si se encuentra, y un diccionario para aosicar el booleano con un string para mostrar al usuario

frase = input("Ingresa una frase para ser revisada: ").lower()
print("Ingresa 3 letras a tu elección")
letra1 = input("Ingresa la primera letra: ")
letra2 = input("Ingresa la segunda letra: ")
letra3 = input("Ingresa la tercera letra: ")

fraseLista = frase.split()
print(f"La frase agregada tiene un total de {len(fraseLista)} palabras")

primeraPalabra = fraseLista[0]
ultimaPalabra = fraseLista[len(fraseLista)-1]
print("La primera palabra es: " + primeraPalabra)
print("La ultima palabra es: " + ultimaPalabra)

repite1 = frase.count(letra1)
repite2 = frase.count(letra2)
repite3 = frase.count(letra3)

print(f"La letra {letra1} se repite {repite1} veces")
print(f"La letra {letra2} se repite {repite2} veces")
print(f"La letra {letra3} se repite {repite3} veces")

fraseInvert = fraseLista[::-1]
unir = " ".join(fraseInvert)
print(unir)
