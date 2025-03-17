import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import './EmployeeList.css';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchEmployees(page);
    }, [page]);

    const fetchEmployees = async (currentPage) => {
        try {
            const response = await api.get(`/employees/paged?page=${currentPage}&size=10`);
            setEmployees(response.data.content);
            setPage(response.data.number);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Erro ao buscar funcionários:', error);
        }
    };

    const handlePreviousPage = () => {
        if (page > 0) setPage(page - 1);
    };

    const handleNextPage = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };

    return (
        <div className="employee-list">
            <h2>Lista de Funcionários</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>Departamento</th>
                        <th>Salário</th>
                        <th>Data de Admissão</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.department}</td>
                            <td>R$ {employee.salary.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                            <td>{employee.hireDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={page === 0}>
                    Página Anterior
                </button>
                <span>
                    Página {page + 1} de {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={page === totalPages - 1}>
                    Próxima Página
                </button>
            </div>
            <div className="back-to-menu">
                <Link to="/">
                    <button className="back-button">Voltar ao Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default EmployeeList;
