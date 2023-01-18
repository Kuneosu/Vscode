s = input()
alph_count = 97
for i in range(26):
    index = s.find(chr(alph_count+i))
    print(index,end=" ")