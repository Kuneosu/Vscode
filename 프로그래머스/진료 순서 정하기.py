eme = [3,76,24]
eme_order = sorted(eme,reverse=True)
seq = []
for i in eme :
    seq.append(eme_order.index(i)+1)
print(seq)