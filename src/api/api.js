// Base URL apontando para o endpoint público do Load Balancer
const API_BASE_URL = 'https://apiempl.neemindev.com/api';

// Buscar dados do dashboard
export const getDashboardData = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard`);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados do dashboard');
  }
  return response.json();
};

// Buscar funcionários com paginação
export const getEmployees = async (page = 0, size = 10) => {
  const response = await fetch(`${API_BASE_URL}/employees?page=${page}&size=${size}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar funcionários');
  }
  return response.json();
};

// Buscar funcionários com salários e paginação
export const getEmployeesWithSalary = async (page = 0, size = 10) => {
  const response = await fetch(`${API_BASE_URL}/employees/salaries-json?page=${page}&size=${size}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar funcionários com salários');
  }
  return response.json();
};

// Buscar funcionário por ID
export const getEmployeeById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/employees/${id}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar funcionário');
  }
  return response.json();
};

// Adicionar novo funcionário
export const addEmployee = async (employeeData) => {
  const response = await fetch(`${API_BASE_URL}/employees`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employeeData),
  });
  if (!response.ok) {
    throw new Error('Erro ao adicionar funcionário');
  }
  return response.json();
};

// Atualizar funcionário
export const updateEmployee = async (id, employeeData) => {
  const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employeeData),
  });
  if (!response.ok) {
    throw new Error('Erro ao atualizar funcionário');
  }
  return response.json();
};

// Deletar funcionário
export const deleteEmployee = async (id) => {
  const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Erro ao deletar funcionário');
  }
  return response.json();
};

// Buscar salários com paginação
export const getSalaries = async (page = 0, size = 10) => {
  const response = await fetch(`${API_BASE_URL}/salaries?page=${page}&size=${size}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar salários');
  }
  return response.json();
};

// Exportando todas as funções como um objeto único (opcional)
const apiService = {
  getDashboardData,
  getEmployees,
  getEmployeesWithSalary,
  getEmployeeById,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getSalaries,
};

export default apiService;
