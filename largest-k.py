for i in range(int(input("t: "))):
    n=int(input('n: '))
    a=list(map(int,input().split()))
    k=0
    m=n
    while(k==0):
        if(m in a):
            k=m
        else:
            m-=1
    print("*************",k)