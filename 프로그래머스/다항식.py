def solution(polynomial):
    x_array = []
    x_num = 0
    n_num = 0
    for num in polynomial.split(' + '):
        if num.find('x') != -1:
            x_array.append(num.replace('x',''))
        else:
            n_num += int(num)
    for x in x_array:
        if x:
            x_num += int(x)
        else:
            x_num += 1

    x_num = str(x_num)+'x'
    x_num = x_num if x_num != '1x' else 'x'
    n_num = str(n_num) 
    if x_num == '0x':
        answer = n_num
    elif n_num == '0':
        answer = x_num
    else:
        answer = x_num+' + '+n_num
            
    return answer