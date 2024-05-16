const balanceElement = document.getElementById('balance');
const amountInput = document.getElementById('amount');
let balance = 1000; // Initial balance

function deposit() {
  let amount = parseFloat(amountInput.value);
  if (!isNaN(amount) && amount > 0) {
    balance += amount;
    updateBalance();
  } else {
    alert('Please enter a valid amount for deposit.');
  }
}

function withdraw() {
  let amount = parseFloat(amountInput.value);
  if (!isNaN(amount) && amount > 0 && amount <= balance) {
    balance -= amount;
    updateBalance();
  } else {
    alert('Insufficient funds or invalid amount for withdrawal.');
  }
}

function updateBalance() {
  balanceElement.textContent = '$' + balance.toFixed(2);
}

const editBtn = document.getElementById('edit-btn');
const doneBtn = document.getElementById('done-btn');
const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const newNameInput = document.getElementById('newName');

editBtn.addEventListener('click', function() {
  nameDisplay.hidden = true;
  nameInput.hidden = false;
  nameInput.value = nameDisplay.textContent;
  nameInput.focus();
  editBtn.hidden = true;
  doneBtn.hidden = false;
});

doneBtn.addEventListener('click', function() {
  nameDisplay.textContent = nameInput.value;
  nameDisplay.hidden = false;
  nameInput.hidden = true;
  editBtn.hidden = false;
  doneBtn.hidden = true;
});

document.getElementById('add-account-btn').addEventListener('click', function() {
  if (newNameInput.value.trim() !== '') {
    nameDisplay.textContent = newNameInput.value.trim();
    newNameInput.value = '';
  } else {
    alert('Please enter a name for the new account holder.');
  }
});
// Function to add account holder to the list
function addAccountHolderToList(name) {
  const accountList = document.getElementById('account-list');
  const listItem = document.createElement('li');
  listItem.textContent = name;
  accountList.appendChild(listItem);
}

// Function to update the list of account holders
function updateAccountList() {
  const accountList = document.getElementById('account-list');
  accountList.innerHTML = ''; // Clear the existing list
  // Loop through all account holders and add them to the list
  // You can fetch account holders from a database or store them in an array
  // For now, let's just add the current account holder
  const name = document.getElementById('name-display').textContent;
  addAccountHolderToList(name);
}

// Call updateAccountList function after adding a new account holder
document.getElementById('add-account-btn').addEventListener('click', function() {
  if (newNameInput.value.trim() !== '') {
    nameDisplay.textContent = newNameInput.value.trim();
    newNameInput.value = '';
    updateAccountList(); // Update the list of account holders
  } else {
    alert('Please enter a name for the new account holder.');
  }
});
// Function to add account holder to the list
function addAccountHolderToList(name) {
  const accountList = document.getElementById('account-list');
  const listItem = document.createElement('li');
  listItem.textContent = name;
  accountList.appendChild(listItem);
}

// Function to update the list of account holders
function updateAccountList() {
  const accountList = document.getElementById('account-list');
  accountList.innerHTML = ''; // Clear the existing list
  // Loop through all account holders and add them to the list
  // You can fetch account holders from a database or store them in an array
  // For now, let's just add the current account holder
  const name = document.getElementById('name-display').textContent;
  addAccountHolderToList(name);
}

document.getElementById('add-account-btn').addEventListener('click', function() {
  const newNameInput = document.getElementById('newName');
  const initialBalanceInput = document.getElementById('initialBalance');
  const name = newNameInput.value.trim();
  const initialBalance = parseFloat(initialBalanceInput.value);

  if (name !== '' && !isNaN(initialBalance) && initialBalance >= 0) {
    // Add the account holder
    nameDisplay.textContent = name;
    balance = initialBalance; // Set the initial balance
    updateBalance(); // Update the displayed balance
    updateAccountList(); // Update the list of account holders
    newNameInput.value = '';
    initialBalanceInput.value = '';
  } else {
    alert('Please enter a valid name and initial balance for the new account holder.');
  }
});
