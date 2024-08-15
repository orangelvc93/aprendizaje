monedas = 5

while monedas > 0:
    print(f'Tengo {monedas} monedas')
    monedas -= 1
else:
    print("No tengo mas dinero")
    
    
respuesta = "s"

while respuesta == "s":
    respuesta = input('Quieres seguir? (s/n)')
else:
    print("gracias")
    
    
# Ejemplo de Break
nombre = input("Ingresa tu nombre: ")

for letra in nombre:
    if letra == "n":
        break
    print(letra)
    
# Ejemplo de Continue
nombre = input("Ingresa tu nombre: ")

for letra in nombre:
    if letra == "n":
        continue
    print(letra)