# for i in range(int(input())):
#     n,k = map(int,input().split())
#     a=list(map(int,input().split()))
#     a.sort()
#     print(a[(n+k)//2])
    

# cook your dish here
for i in range(int(input())):
    n=int(input())
    sum1=0
    if(n<9):
        sum1+=(n*(n+1)//2)
    else:
        mod = n%9
        print("****** ",n//9, (n//9)*45)
        sum1+=((n//9)*45 + mod*(mod+1)//2)
    print(sum1)