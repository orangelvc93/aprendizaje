nombres = ["Ana", "Maria", "Hugo"]
edades = [30, 20, 35]
ciudades = ["Madrid", "Caracas", "Barcelona"]


combinados = list(zip(nombres, edades, ciudades))
print(combinados)

for nombre, edad, ciudad in combinados:
    print(f"{nombre} tiene {edad} años y vive en {ciudad}")
    
    """ 
    Práctica Zip 1
Muestra en pantalla frases como la del siguiente ejemplo:

La capital de Alemania es Berlín

Utiliza la función zip, loops, y las siguientes listas de países y capitales para resolverlo rápida y eficientemente.
    """
capitales = ["Berlín", "Tokio", "París", "Helsinki", "Ottawa", "Canberra"]
paises = ["Alemania", "Japón", "Francia", "Finlandia", "Canadá", "Australia"]

combinados = list(zip(capitales, paises))

for capitales, paises in combinados:
    print(f"La capital de {paises} es {capitales}")
    
    
