def sol(keyinput, board):
    answer = []
    row = 0
    col = 0
    r_range = board[0]//2-1 
    c_range = board[1]//2-1 
    
    for k in keyinput:
        if row >= -r_range and row <= r_range:
            if k == 'left':
                row -= 1
            elif k == 'right':
                row += 1
        if col >= -c_range and col <= c_range:
            if k == 'up': 
                col += 1
            elif k == 'down':
                col -= 1
    if board[0] == 1:              
        answer.append(0)  
    else:
        answer.append(row)
    if board[1] == 1:
        answer.append(0)
    else:
        answer.append(col)
    return answer

key = ["left","left","left","left","left","right"]
board =[7, 9]	
print(sol(key,board))