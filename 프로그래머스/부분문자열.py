s = "AaddddaabCdEgggddddgFG"
f = "dE"

r_s = s[::-1]
r_f = f[::-1]
print(r_s)
print(r_f)

fd = r_s.find(r_f)+len(r_f)
print(fd)

print(s[:len(s)-fd])