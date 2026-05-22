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
            if len(transaction['description'])>23:
				text += f'{transaction['description'][0:24]}\n'
			text += f'{transaction['description']}\n'
		text += f'Total: {self.get_balance():.2f}'
        return text
def create_spend_chart(categories):
    output="Percentage spent by category\n"


nuts=Category("Food")
nuts.deposit(500.5,"Found")
nuts.withdraw(25,"Acorns")
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
print(nuts)


List each ledger entry with up to 23 characters of its description left-aligned and the amount right-aligned (two decimal places, max 7 characters).
*************Food*************
initial deposit        1000.00
groceries               -10.15
restaurant and more foo -15.89
Transfer to Clothing    -50.00
Total: 923.96


You should have a function outside the Category class named create_spend_chart(categories) that takes a list of categories and returns a bar-chart string. To build the chart:

Calculate percentages from withdrawals only and not from deposits. The percentage should be the percentage of the amount spent for each category to the total spent for all categories (rounded down to the nearest 10).
Label the y-axis from 100 down to 0 in steps of 10.
Use o characters for the bars.
Include a horizontal line two spaces past the last bar.
Write category names vertically below the bar.
This function will be tested with up to four categories.

Make sure to match the spacing of the example output exactly:

Percentage spent by category
100|          
 90|          
 80|          
 70|          
 60| o        
 50| o        
 40| o        
 30| o        
 20| o  o     
 10| o  o  o  
  0| o  o  o  
    ----------
     F  C  A  
     o  l  u  
     o  o  t  
     d  t  o  
        h     
        i     
        n     
        g     
NOTE: open the browser console with F12 to see a more verbose output of the tests.

def __str__(self):
    output = ""

    output += f"{self.name}\n"

    for item in self.ledger:
        output += f"{item['description']} {item['amount']}\n"

    output += f"Total: {self.get_balance()}"

    return output	