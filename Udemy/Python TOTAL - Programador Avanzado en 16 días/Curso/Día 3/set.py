# Los set son elementos que no se pueden repetir ni modificar, tampoco permite elementos lista ni diccionario, tuples si

mi_set = set([1,2,3,4,5])
print(type(mi_set))

print(mi_set)


otro_set = {1,2,3}
print(type(otro_set))
print(otro_set)

print(2 in mi_set)

# Union de sets

s1 = {1,2,3}
s2 = {3,4,5}
s3 = s1.union(s2)

print(s3)

# Agregar y eliminar
s1.add(6)
s1.remove(1)
print(s1)

# elimina todo
s1.clear()
print(s1)
