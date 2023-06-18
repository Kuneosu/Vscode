arr = [0, 1, 2, 3, 4]	
quries = [[0, 3],[1, 2],[1, 4]]	

for qurie in quries:
    x = qurie[0]
    y = qurie[1]
    dif = arr[x]-arr[y]
    arr[x] = arr[x]-dif
    arr[y] = arr[y]+dif
    
