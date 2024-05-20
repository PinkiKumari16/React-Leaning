# i = 0
# j=1
# k=i+j
# p=0
# while p<10:
#     print(i,end=" ")
#     i=j
#     j=k
#     k=i+j
#     p+=1
# print()
# print(len('rtyui'))

# s1 = input()
# s2 = input()
# flag = True
# for i in s1:
#     if(i not in s2):
#         flag = False
#         break
#     else:
#         if(s1.count(i) != s2.count(i)):
#             flag = False
#             break
# if(flag):
#     print(flag)
# else:
#     print(flag)
    
# s1 = input()
# s2 = input()
# if(len(s1)!= len(s2)):
#     print(False)
# else:
#     if(sorted(s1) == sorted(s2)):
#         print(True)
#     else:
#         print(False)






#  ****************   atcoder third question   *****************************
n=int(input())
arr = list(map(int,input().split()))
res = []
for i in range(n):
    if(i==0):
        res+=[arr[i]]
    elif(arr[i] != res[-1]):
        res+=[arr[i]]
    else:
        res[-1] = res[-1]+1
        for j in range(-1,-len(res),-1):
            if(res[j] == res[j-1]):
                res[j-1]=res[j]+1
                res.pop(j)
print(len(res),res)


