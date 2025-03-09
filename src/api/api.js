const API_BASE_URL = 'http://localhost:8085';

export const getDashboardData = async () => {
  const response = await fetch(`${API_BASE_URL}/api/dashboard`);
  if (!response.ok) {
    throw new Error('Erro ao buscar dados do dashboard');
  }
  return response.json();
};

export const getEmployees = async (page = 0, size = 10) => {
  const response = await fetch(`${API_BASE_URL}/api/employees?page=${page}&size=${size}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar funcionários');
  }
  return response.json();
};

// ✅ Adicione esta função que estava faltando
export const getEmployeesWithSalary = async (page = 0, size = 10) => {
  const response = await fetch(`${API_BASE_URL}/api/employees/salaries-json?page=${page}&size=${size}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar funcionários com salários');
  }
  return response.json();
};
