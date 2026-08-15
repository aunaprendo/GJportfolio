class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({
        type: "deposit",
        amount: amount,
      });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be greater than zero.";
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({
        type: "withdraw",
        amount: amount,
      });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount.";
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter((trans) => trans.type === "deposit")
      .map((trans) => trans.amount)
      .join(",");
    return `Deposits: ${deposits}`;
  }

  listAllWithdrawals() {
    const withdraws = this.transactions
      .filter((trans) => trans.type === "withdraw")
      .map((trans) => trans.amount)
      .join(",");
    return `Withdrawals: ${withdraws}`;
  }
}

const squirrelBank = new BankAccount();
// console.log(squirrelBank.balance);
// console.log(squirrelBank.transactions);
console.log(squirrelBank.deposit(1000));
// console.log(squirrelBank.balance);
// console.log(squirrelBank.transactions);
console.log(squirrelBank.withdraw(10));
// console.log(squirrelBank.balance);
// console.log(squirrelBank.transactions);
squirrelBank.deposit(5);
squirrelBank.deposit(10);
squirrelBank.withdraw(17);
squirrelBank.withdraw(10);
console.log(squirrelBank.checkBalance());
console.log(squirrelBank.listAllDeposits());
console.log(squirrelBank.listAllWithdrawals());
