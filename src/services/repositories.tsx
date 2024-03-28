
export interface RepositoryServiceInterface {
    find(): Promise<any[]>;
}

class RepositoryService implements RepositoryServiceInterface {
    async find(): Promise<any[]> {
        const response = await fetch(`https://api.github.com/users/JhonItalo/repos`);
        const data = await response.json();
        return data
    }
}

export default RepositoryService