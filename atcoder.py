obj = {}
n=int(input())
for i in range(n):
  s,c=map(int,input().split())
  obj[i+1]=[s,c]
valuesAll = [*obj.values()]
for j in range(n-1):
  for k in range(j+1,n):
    if (valuesAll[j][0]< valuesAll[k][0] and valuesAll[j][1] > valuesAll[k][1]):
      valuesAll.pop(j)
# print(valuesAll)