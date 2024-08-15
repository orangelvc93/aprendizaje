# LOS OPERADORES LÓGICOS SON "AND" "OR" "NOT"

#Se deben cumplir las 2 operaciones
mi_bool = (4 < 5) and (5 > 6) # Se puede poner sin paréntesis
print(mi_bool)

texto = "Esta frase es breve"
frase = ("frase" in texto) and ("es" in texto)
print(frase)



#Se deben cumplir una de las 2 operaciones
mi_bool2 = (4 < 5) or (5 > 6) # Se puede poner sin paréntesis
print(mi_bool2)


# Es como preguntar si no es verdad que se cumple
mi_bool3 = not "a" == "a"
print(mi_bool3)

frase = "Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades de que salga bien no te acompañan"
palabra1 = "éxito"
palabra2 = "tecnología"

mi_bool = not ("palabra1" in frase) and not ("palabra2" in frase)