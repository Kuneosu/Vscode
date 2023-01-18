cro_alph = ["c=","c-","dz=","d-","lj","nj","s=","z="]

s = input()
cro_count = 0
for i in cro_alph:
    if i in s :
        cro_count += s.count(i)
        s = s.replace(i,"*")

s = s.replace("*","")
count = len(s)
print(cro_count+count)