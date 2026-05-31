def hanoi_solver(num):
    rod1=list(range(num,0, -1))
    rod2=[]
    rod3=[]
    rods=[rod1, rod2, rod3]

    snapshot=f'{rod1} {rod2} {rod3}\n'
    results=[]
    results.append(snapshot)

    def move_stack(disks, source, helper, target):
        if disks==1:
            disk=source.pop()
            target.append(disk)
            snapshot=f'{rod1} {rod2} {rod3}\n'
            results.append(snapshot)
            return
        
        move_stack(disks-1, source, target, helper)
        
        disk=source.pop()
        target.append(disk)
        snapshot=f'{rod1} {rod2} {rod3}\n'
        results.append(snapshot)
        
        move_stack(disks-1, helper, source, target)
        
    move_stack(num, rod1, rod2, rod3)
    results_joined=''.join(results).rstrip("\n")
    return results_joined
print(hanoi_solver(2))
