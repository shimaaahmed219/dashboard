// Sales Data for Chart
const salesData = [50, 100, 200, 300, 150, 400, 350];

const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Sales',
      data: salesData,
      borderColor: '#4CAF50',
      fill: false,
      tension: 0.1,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Top Sellers Data
const bestSellers = [
  { name: 'Product 1', price: '$126.50', sales: 999 },
  { name: 'Product 2', price: '$126.50', sales: 999 },
  { name: 'Product 3', price: '$126.50', sales: 999 }
];

const bestSellersList = document.getElementById('bestSellersList');
bestSellers.forEach(item => {
  const li = document.createElement('li');
  li.classList.add('list-group-item');
  li.textContent = `${item.name} - ${item.price} (${item.sales} sales)`;
  bestSellersList.appendChild(li);
});

// Recent Orders Data
const orders = [
  { product: 'Product 1', id: '#25422', date: 'Nov 8, 2023', customer: 'John', status: 'Completed', amount: '$200.00' },
  { product: 'Product 2', id: '#25425', date: 'Nov 7, 2023', customer: 'Sarah', status: 'Cancelled', amount: '$200.00' },
  { product: 'Product 3', id: '#25424', date: 'Nov 6, 2023', customer: 'Michael', status: 'Completed', amount: '$200.00' }
];

const ordersTable = document.getElementById('ordersTable');
orders.forEach(order => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${order.product}</td>
    <td>${order.id}</td>
    <td>${order.date}</td>
    <td>${order.customer}</td>
    <td>${order.status}</td>
    <td>${order.amount}</td>
  `;
  ordersTable.appendChild(row);
});
