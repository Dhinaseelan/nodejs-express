def adev(num):
    if(num%2==0):
        print("even")
    else:
        print("odd")
adev(5)

#sum of digit
def sumofdigit(num):
    total=0;
    while num>0:
        digit=num%10
        total+=digit
        num//=10
    return total
print(sumofdigit(123))

def using_str(num):
    total=0
    for i in str(num):
        total+=int(i)
    return total
print(using_str(123))

def calculator():
    num1=int(input("Enter first number:"))
    num2=input("Enter secound number:")
    oper=input("Enter operator like '+ - X /")
    if(oper=='+'):
        print('addition of two number :',num1+num2)
    elif(oper=='-'):
        print('subration of two number:',num1-num2)
    elif(oper=='X'):
        print('mulitpication of two number:',num1*num2)
    elif(oper=='/'):
        print("divition of two number :",num1/num2)
    else:
        print("You entered a wrong option pleace enter correct option")
calculator()