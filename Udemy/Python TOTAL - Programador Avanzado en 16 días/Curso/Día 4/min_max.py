# Para los string, siempre busca primero por mayúsculas y luego minúsculas


list = [56,4,56,33,65,33,87]
menor = min(56,4,56,33,65,33,87)
mayor = max(56,4,56,33,65,33,87)

print(menor)
print(mayor)
print(min(list))

nombres = ["Juan", "pablo", "alicia", "maria"]

print(min(nombres))
print(max(nombres))

""" 

Práctica Min y Max 3
Utilizando max(), min() y métodos de diccionarios, obtén el mínimo valor a partir del siguiente diccionario:

diccionario_edades = {"Carlos":55, "María":42, "Mabel":78, "José":44, "Lucas":24, "Rocío":35, "Sebastián":19, "Catalina":2,"Darío":49}

Almacena dicho valor en una variable llamada edad_minima.

También, obtén el nombre que se ubica último en orden alfabético, y almacénalo en una variable llamada ultimo_nombre.
"""

diccionario_edades = {"Carlos":55, "María":42, "Mabel":78, "José":44, "Lucas":24, "Rocío":35, "Sebastián":19, "Catalina":2,"Darío":49}


edad_minima = min(diccionario_edades.values())
ultimo_nombre = max(diccionario_edades.keys())