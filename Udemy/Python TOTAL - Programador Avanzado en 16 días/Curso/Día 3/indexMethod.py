mi_texto = 'Esto es una prueba'

# Podemos buscar por palabras o letras

indice = mi_texto.index("a")
indice2 = mi_texto.index("prueba")
indice5 = mi_texto[4]
print(indice)
print(indice2)
print(indice5)

# Tambien le podemos decir desde donde empezar a buscar y también donde parar
indice3 = mi_texto.index("a", 5, 10)
print(indice3)


# Podemos buscar de derecha a izquierda
indice4 = mi_texto.rindex("a")
print(indice4)