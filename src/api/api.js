const API_BASE_URL = 'https://apiempl.neemindev.com'; // Adicione "https://"

// Buscar dados do dashboard
export const getDashboardData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/dashboard`);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados do dashboard');
  }
  return response.json();
};

// Buscar funcionários com paginação
export const getEmployees = async (page = 0, size = 10) => {
  const response = await fetch(`${API_BASE_URL}/api/employees?page=${page}&size=${size}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar funcionários');
  }
  return response.json();
};

// Buscar funcionários com salários e paginação
export const getEmployeesWithSalary = async (page = 0, size = 10) => {
  const response = await fetch(`${API_BASE_URL}/api/employees/salaries-json?page=${page}&size=${size}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar funcionários com salários');
  }
  return response.json();
};

// Buscar funcionário por ID
export const getEmployeeById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/api/employees/${id}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar funcionário');
  }
  return response.json();
};