def dfs(graph, root):
    visited = []
    
    def traverse(node):
        visited.append(node)
        
        for index, value in enumerate(graph[node]):
            if value == 1 and not index in visited:
                traverse(index)
        
    traverse(root)
    return visited

print(dfs([
[0, 1, 0, 0], 
[1, 0, 1, 0], 
[0, 1, 0, 1], 
[0, 0, 1, 0]], 1))
