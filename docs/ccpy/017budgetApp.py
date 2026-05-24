class Category:
    def __init__(self, name):
        self.name = name
        self.ledger= []
		
    def deposit (self, amount, description=""):
        self.ledger.append({'amount': amount, 'description': description})
		
    def withdraw (self, amount, description=""):
        amount *= -1
        if self.check_funds(amount):
            self.ledger.append({'amount': amount, 'description': description})
            return True
        return False
		
    def get_balance(self):
        amounts=[]
        for transaction in self.ledger:
            amounts.append(transaction['amount'])
        total=sum(amounts)
        return total
		
    def transfer(self, amount, category):
        amount *= -1
        if self.check_funds(amount):
            self.ledger.append({'amount': amount, 'description': f'Transfer to {category.name}'})
            category.deposit(abs(amount),f'Transfer from {self.name}')
            return True
        return False
    def check_funds(self, amount):
        if abs(amount) <= self. get_balance():
            return True
        return False
    def __str__(self):
        title=(30-len(self.name))/2
        stars ="*"
        stars *= int(title)
        text =""
        text += f'{stars}{self.name}{stars}\n'
        for transaction in self.ledger:
            abbrev_description = transaction['description'][:23]
            abbrev_amount = f"{transaction['amount']:.2f}"[:7]
            text += f"{abbrev_description:<23}{abbrev_amount:>7}\n"
        text += f'Total: {self.get_balance():.2f}'
        return text

def create_spend_chart(categories):
    output = "Percentage spent by category\n"
    spent = []
    total_spent = 0
    for category in categories:
        category_total = 0
        for transaction in category.ledger:
            if transaction['amount'] < 0 and not transaction['description'].startswith("Transfer"):
                category_total += abs(transaction['amount'])
        spent.append((category.name, category_total))
        total_spent += category_total

    percentages = []
    for name, amount in spent:
        percent = (amount / total_spent) * 100
        rounded = int(percent // 10) * 10
        percentages.append((name, rounded))

    for num in range(100, -1, -10):
        output += f"{num:>3}| "
        for name, percent in percentages:
            if percent >= num:
                output += "o  "
            else:
                output += "   "
        output += "\n"

    output += "    "
    output += "-" * (len(categories) * 3 + 1)
    output += "\n"

    longest = max(len(category.name) for category in categories)
    for i in range(longest):
        output += "     "
        for category in categories:
            if i < len(category.name):
                output += category.name[i] + "  "
            else:
                output += "   "
        output += "\n"
    return output.rstrip("\n")
	
	
	

nuts=Category("Food")
nuts.deposit(500.5,"Found")
nuts.withdraw(25,"Acorns")
nuts.withdraw(75,"Pecans")
# print(nuts.get_balance())
# print(nuts.ledger)
drey=Category("Home")
drey.deposit(1000,"Found")
drey.withdraw(150,"Tree")
drey.transfer(500,nuts)
#print(drey.ledger)
#print(drey.get_balance())
#print(nuts.ledger)
#print(nuts.get_balance())
#print(nuts)
kits=Category("Babies")
kits.deposit(500,"Found")
kits.withdraw(100,"Fluff")
kits.withdraw(300,"Toys")
yard=Category("Town")
yard.deposit(700,"Found")
yard.withdraw(10,"Leaves")
yard.withdraw(600,"Security")
category_list = [nuts, drey, kits, yard]
print(create_spend_chart(category_list))

