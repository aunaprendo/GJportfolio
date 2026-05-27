def verify_card_number(string):
    string = string.replace("-", "")
    string = string.replace(" ", "")
    array=list(string)

    digitChecks=array[-2::-2]
    def doubleDigits(digit):
        num=int(digit)
        num*=2
        if num>9:
            num=num-9
        return num
    digitChecksDoubled=list(map(doubleDigits, digitChecks))

    digitsSame=array[-1::-2]
    digitsSameInt = list(map(int, digitsSame))

    allDigits=digitsSameInt+digitChecksDoubled
    total=sum(allDigits)

    if total%10==0:
        return 'VALID!'
    return 'INVALID!'

print(verify_card_number('1234 5678 9012 3456'))

