class HashTable:
    def __init__(self):
        self.collection={}
		
    def hash(self, string):
        total = 0
        for char in string:
            total += ord(char)
        return total
		
    def add(self, key, value):
        hashKey=self.hash(key)
        if hashKey in self.collection:
            self.collection[hashKey][key]=value
        else:
            self.collection[hashKey]= {key:value}
        
    def remove(self, key):
        hashKey=self.hash(key)		
        if hashKey in self.collection:
            self.collection[hashKey].pop(key, None)
			
        
    def lookup(self, key):
        hashKey=self.hash(key)
        if hashKey in self.collection and key in self.collection[hashKey]:
            return self.collection[hashKey][key]
        return None

table=HashTable()
#print(table.hash("squirrels"))
table.add("one", "squirrels")
#print(table.collection)
table.add("noe", "nuts")
table.add("two", "tree")
#print(table.collection)
table.add("three", "dino")
table.add("four", "mario")
table.add("five", "candy")
#print(table.collection)
table.remove("six")
#print("*****")
print(table.lookup('pecans'))