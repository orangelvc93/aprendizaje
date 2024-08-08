mi_lista = ['a', 'b', 'c']
mi_lista2 = ['d', 'e', 'f']
mi_lista3 = mi_lista + mi_lista2
# print(len(mi_lista))
# print(mi_lista)
# print(mi_lista3)


mi_lista3[0] = "alfa"
print(mi_lista3)

# agregamos elementos
mi_lista3.append("g")
print(mi_lista3)

# Eliminar elementos (ultimo elemento) o seleccionar el indice a eliminar
mi_lista3.pop()

elminado = mi_lista3.pop(2)
print(f"De la lista {mi_lista3} se ha eliminado: {elminado}")


# Ordenar listas
mi_lista4 = ["a", "d", "f", "h", "b"]
mi_lista4.sort()
mi_lista4.reverse()
print(mi_lista4)