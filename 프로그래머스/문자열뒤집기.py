m = "Progra21Sremm3"
s = 6
e = 12
r = m[s:e+1]
r = r[::-1]
print(r)

m = list(m)
r= list(r)
m[s:e+1] = r
