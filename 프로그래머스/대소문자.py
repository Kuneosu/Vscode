s = "aaAbbBCcDeFg"
str = ""
for i in s:
    if i.isupper():
        str  = str+i.lower()
    else:
        str = str+i.upper()
        

print(str)