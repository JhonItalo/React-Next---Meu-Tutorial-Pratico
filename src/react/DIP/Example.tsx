import { useEffect, useState } from "react";
import RepositoryService, { RepositoryServiceInterface } from "@/services/repositories";

function DIP() {
    const [data, setData] = useState<any[] | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            const service: RepositoryServiceInterface = new RepositoryService
            const result = await service.find()
            setData(result);
        };
        fetchData();
    }, []);

    return (

        <div>
            <h1>topico</h1>
            {data && (
                <div>
                    {data.map((item: any) => (
                        <p key={item.id}>{item.name}</p>
                    ))}
                </div>
            )}
        </div>

    )
}

export default DIP