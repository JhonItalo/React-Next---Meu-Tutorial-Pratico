'use client'

import React, { useState, useEffect } from 'react';

const GitHubReposList = () => {
    const [repos, setRepos] = useState([]);
    console.log(repos, "repos")

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Substitua 'seu-nome-de-usuario' pelo seu nome de usuário do GitHub
                const response = await fetch('https://api.github.com/users/JhonItalo/repos');
                const data = await response.json()
                setRepos(data);
            } catch (error) {
                console.error('Erro ao buscar repositórios do GitHub:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Meus Repositórios do GitHub</h1>
            <ul>
                {repos.map((repo, index) => (
                    <li key={index}>
                        {repo.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitHubReposList;
