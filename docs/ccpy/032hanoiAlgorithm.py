solve(3, source, helper, target)
solve(2, source, target, helper)
def hanoi_solver(int):
    source=list(range(int,0, -1))
    helper=[]
    target=[]
    while len(source)>0 or len(helper)>0:
        diskToMove= len(source)-1
        rods=[source, helper, target]
        if diskToMove %2==0:
            top=rods[0].pop()
            rods[2].append(top)
        top=rods[0].pop()
    return rods
print(hanoi_solver(3))




2
move top to help 
move second to goal
rebuild 
done
starter.   helper.   goal

3
starter.   goal.   helper
move top helper
move second goal 
rebuild 
back to start, none to get off so
helper.   starter.   goal
move big to goal
small stack move top to helper
rebuild 


4



    snapshot=f'{rod1} {rod2} {rod3}\n'
    result=""

hanoi_solver(2) should return [
2, 1] [] []\n
[2] [1] []\n
[] [1] [2]\n
[] [] [2, 1].

hanoi_solver(4) should return 4-3
move n-1=3
3/3=1 
3-1=2

if n-1 / 2 remainder not 0, move top one 
otgerwise move 2
in all full 

solve(3, source, helper, target)
solve(2, source, target, helper)


3 move 2 open 
[4, 3, 2, 1] [] []\n.      1- if length is even move top one to middle
[4, 3, 2] [1] []\n.        1- if top big the middle move to last
[4, 3] [1] [2]\n.          2- if top small last move to last
[4, 3] [] [2, 1]\n.        1- if middle empty move top to middle
[4] [3] [2, 1]\n.          3- if bottom is smaller than firs move top to first
[4, 1] [3] [2]\n.          3- if item is smaller than middle move tomiddld
[4, 1] [3, 2] []\n.        1-
[4] [3, 2, 1] []\n
[] [3, 2, 1] [4]\n
[] [3, 2] [4, 1]\n
[2] [3] [4, 1]\n
[2, 1] [3] [4]\n
[2, 1] [] [4, 3]\n
[2] [1] [4, 3]\n
[] [1] [4, 3, 2]\n
[] [] [4, 3, 2, 1]

Move n-1 away
Move largest disk
Move n-1 back
    a number of disks
* a source rod
* a helper rod
* a destination rod

hanoi_solver(3) should return 
[3, 2, 1] [] []\n. 2 disks to move off, move 2
[3, 2] [] [1]\n.  1 disk to move off, mov e1
[3] [2] [1]\n no disks to move -move 
[3] [2, 1] []\n
[] [2, 1] [3]\n
[1] [2] [3]\n
[1] [] [3, 2]\n
[] [] [3, 2, 1]

until 1 has 1 and 3 has 0
move top n-1
if 
To move disk 3:

1. move disks 1,2 away
2. move disk 3
3. move disks 1,2 back on top
hanoi_solver(5) should return 
[5, 4, 3, 2, 1] [] []\n
[5, 4, 3, 2] [] [1]\n
[5, 4, 3] [2] [1]\n
[5, 4, 3] [2, 1] []\n
[5, 4] [2, 1] [3]\n
[5, 4, 1] [2] [3]\n[5, 4, 1] [] [3, 2]\n[5, 4] [] [3, 2, 1]\n[5] [4] [3, 2, 1]\n[5] [4, 1] [3, 2]\n[5, 2] [4, 1] [3]\n[5, 2, 1] [4] [3]\n[5, 2, 1] [4, 3] []\n[5, 2] [4, 3] [1]\n[5] [4, 3, 2] [1]\n[5] [4, 3, 2, 1] []\n[] [4, 3, 2, 1] [5]\n[1] [4, 3, 2] [5]\n[1] [4, 3] [5, 2]\n[] [4, 3] [5, 2, 1]\n[3] [4] [5, 2, 1]\n[3] [4, 1] [5, 2]\n[3, 2] [4, 1] [5]\n[3, 2, 1] [4] [5]\n[3, 2, 1] [] [5, 4]\n[3, 2] [] [5, 4, 1]\n[3] [2] [5, 4, 1]\n[3] [2, 1] [5, 4]\n[] [2, 1] [5, 4, 3]\n[1] [2] [5, 4, 3]\n[1] [] [5, 4, 3, 2]\n[] [] [5, 4, 3, 2, 1].